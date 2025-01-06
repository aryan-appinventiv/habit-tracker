import React, { useState } from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { images } from '../../assets/images';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/customButton';
import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomTextInput from '../../components/customTextInput';
import { validateEmail, validatePassword } from '../../utils/validation';
import firestore from '@react-native-firebase/firestore';
import { onLogin } from '../../utils/firestore/onLogin';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { top } = useSafeAreaInsets();
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Signin'>>();

  const validateLogin = () => {
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);

    if (!emailValidationError && !passwordValidationError) {
      onLogin(email, password, setIsLoading, Navigation);
    }
  };

  const gotoForgot = () => {
    Navigation.navigate('ForgotPassword');
  };

  return (
    <KeyboardAvoidingView
      style={[styles.Container, { paddingTop: top }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.mainCont} bounces={false} showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>Login</Text>
          <CustomTextInput
            value={email}
            onChangeText={text => {
              setEmail(text);
              setEmailError('');
            }}
            placeholder="xyz@email.com"
            error={emailError}
            icon={images.mail}
            autoCapitalize="none"
            secureTextEntry={false}
            showToggle={false}
            label= "Enter your email"
          />
          <CustomTextInput
            value={password}
            onChangeText={text => {
              setPassword(text);
              setPasswordError('');
            }}
            placeholder="password"
            error={passwordError}
            icon={images.password}
            secureTextEntry={!passwordVisible}
            toggleSecureEntry={() => setPasswordVisible(!passwordVisible)}
            showToggle={true}
            label= "Enter password"
          />
          {isLoading ? (
            <ActivityIndicator size="large" color={colors.text} />
          ) : (
            <View style={styles.btn}>
              <CustomButton onPress={validateLogin} title="Login" disabled={false} />
            </View>
          )}
          <TouchableOpacity style={styles.forgotCont} onPress={gotoForgot}>
            <Text style={styles.forgotText}>Forgot password</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signin;
