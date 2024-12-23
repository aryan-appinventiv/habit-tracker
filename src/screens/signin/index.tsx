import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { images } from '../../assets/images';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/customButton';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomInput from '../../components/customInput';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const {top: top} = useSafeAreaInsets();

  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Signin'>>();

  const validateLogin = () => {
    let flag = true;
    if (password.trim().length < 6) {
      setPasswordError('login_pass_error');
      flag = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('ogin_email_error1');
      flag = false;
    } else if (!emailPattern.test(email)) {
      setEmailError('login_email_error2');
      flag = false;
    }

    if (flag) {
      setEmailError('');
      setPasswordError('');
      onLogin();
    }
  };

  const onLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setIsLoading(true);
        const user = response.user;

        if (user.emailVerified) {
          setIsLoading(false);
          Navigation.navigate('Profile');
        } else {
          setIsLoading(false);
          Alert.alert('email_not_verified','verify_email', [
            {
              text: 'resend_email',
              onPress: () => user.sendEmailVerification(),
            },
            {text: 'ok'},
          ]);

          auth().signOut();
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        Alert.alert('email and password do not matched')
      });
  };

  const gotoForgot = () => {
    Navigation.navigate('ForgotPassword');
  };

  return (
    <KeyboardAvoidingView
      style={[styles.Container, {paddingTop: top}]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainCont}>
            <Text style={styles.heading}>Login</Text>
            <Text style={styles.label}>Enter your Email</Text>
            <View style={styles.inputBox}>
              <Image source={images.mail} style={styles.icon} />
              <TextInput
                value={email}
                onChangeText={text => {
                  setEmail(text);
                  setEmailError('');
                }}
                placeholder={"email_address"}
                autoCapitalize="none"
                style={styles.textInput}
              />
            </View>
            <CustomInput placeholder='xyz@email.com' keyType={'email-address'} value={email} onChangeText={text => {
                  setEmail(text);
                  setEmailError('');
                }} />
            {emailError && emailError.length > 0 && (
              <Text style={styles.error}>{emailError}</Text>
            )}

            <View style={styles.inputBox}>
              <Image source={images.user} style={styles.icon} />
              <TextInput
                value={password}
                onChangeText={text => {
                  setPassword(text);
                  setPasswordError('');
                }}
                placeholder={"password"}
                autoCapitalize="none"
                secureTextEntry={!passwordVisible}
                style={styles.textInput}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}>
                <Image
                  source={passwordVisible ? images.plus : images.minus}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            {passwordError && passwordError.length > 0 && (
              <Text style={styles.error}>{passwordError}</Text>
            )}
            {isLoading? (<ActivityIndicator size={'large'} color={colors.text} />):(<CustomButton onPress={validateLogin} title={'Login'} disabled={false}/>)}
            <TouchableOpacity style={styles.forgotCont} onPress={gotoForgot}>
              <Text style={styles.forgotText}>Forgot password</Text>
            </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signin;
