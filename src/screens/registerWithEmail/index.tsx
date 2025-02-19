import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { images } from '../../assets/images';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/customButton';
import CustomTextInput from '../../components/customTextInput';
import styles from './styles';
import { validateConfirmPassword, validateEmail, validatePassword } from '../../utils/validation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';
import CustomToast from '../../components/customToast';

const RegisterWithEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { top } = useSafeAreaInsets();

  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const validateInputs = () => {
    let isValid = true;

    const emailValidationError = validateEmail(email);
    if (emailValidationError) {
      setEmailError(emailValidationError);
      isValid = false;
    } else {
      setEmailError('');
    }

    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      isValid = false;
    } else {
      setPasswordError('');
    }

    const confirmPasswordValidationError = validateConfirmPassword(confirmPassword, password);
    if(confirmPasswordValidationError){
      setConfirmPasswordError(confirmPasswordValidationError);
      isValid= false;
    }
    else{
      setConfirmPasswordError('');
    }
    return isValid;
  };

  const onRegister = () => {
    if (!validateInputs()) return;
  
    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth().currentUser;
        user
          ?.sendEmailVerification()
          .then(() => {
            CustomToast('success', 'Verification email sent.', 'Please check your inbox to verify your email before logging in.')
          })
          .catch(error => {
            console.log('Error sending verification email:', error);
            CustomToast('error', 'Error sending verification email');
          });
  
        setEmail('');
        setPassword('');
        setConfirmPassword('');
  
        Navigation.navigate('Signin');
      })
      .catch(error => {
        setIsLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          CustomToast('error', 'That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          CustomToast('error', 'That email address is invalid!');
        } else {
          CustomToast('error', 'Error during registration');
        }
      })
      .finally(() => setIsLoading(false));
  };
  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.Container, { paddingTop: top }]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainCont}>
          <Text style={styles.heading}>Create an Account</Text>

          <CustomTextInput
            value={email}
            onChangeText={text => {
              setEmail(text);
              setEmailError('');
            }}
            placeholder="Email Address"
            error={emailError}
            icon={images.mail}
            autoCapitalize="none"
            secureTextEntry={false}
            showToggle={false}
            label="Enter your email"
          />

          <CustomTextInput
            value={password}
            onChangeText={text => {
              setPassword(text);
              setPasswordError('');
            }}
            placeholder="Password"
            error={passwordError}
            icon={images.password}
            secureTextEntry={!passwordVisible}
            toggleSecureEntry={() => setPasswordVisible(!passwordVisible)}
            showToggle={true}
            label="Enter password"
          />

          <CustomTextInput
            value={confirmPassword}
            onChangeText={text => {
              setConfirmPassword(text);
              setConfirmPasswordError('');
            }}
            placeholder="Confirm Password"
            error={confirmPasswordError}
            icon={images.password}
            secureTextEntry={!confirmPasswordVisible}
            toggleSecureEntry={() =>
              setConfirmPasswordVisible(!confirmPasswordVisible)
            }
            showToggle={true}
            label="Confirm password"
          />

          {isLoading ? (
            <ActivityIndicator size="large" color={colors.text} />
          ) : (
            <View style={styles.btn}>
              <CustomButton onPress={onRegister} title={'Register'} disabled={false} />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterWithEmail;
