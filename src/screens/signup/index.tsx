import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {vh, vw, Wheight} from '../../utils/dimensions';
import CustomButton from '../../components/customButton';
import {images} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';
import { colors } from '../../utils/colors';
import { emailPattern } from '../../constants/regex';

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const {top: top} = useSafeAreaInsets();

  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Signup'>>();
  const Continue = () => {
    if (!emailPattern.test(email)) {
      setError('Please enter valid email');
    } else {
      Navigation.navigate('OTP',{email});
    }
  };

  const skip = () => {
    Navigation.replace('BottomTab');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.container, {paddingTop: top}]}>
      <TouchableOpacity style={styles.skip} activeOpacity={0.7} onPress={skip}>
        <Text style={styles.skipTxt}>Skip for now</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainCont}>
          <Text style={styles.title}>Sign up</Text>
          <Text style={styles.label}>Enter your Email</Text>
          <TextInput
            placeholder="example@email.com"
            style={styles.input}
            autoCapitalize="none"
            autoComplete="off"
            placeholderTextColor={colors.gray}
            value={email}
            onChangeText={txt => [setEmail(txt), setError('')]}
            keyboardType='email-address'
          />
          {error && <Text style={styles.error}>{error}</Text>}
          <CustomButton
            title="Continue"
            onPress={Continue}
            disabled={email.trim().length < 1}
          />
          <Text style={styles.or}>or</Text>
          <TouchableOpacity style={styles.logoCont} activeOpacity={0.7}>
            <Image source={images.googleLogo} style={styles.logo} />
            <Text style={styles.logoTxt}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoCont} activeOpacity={0.7}>
            <Image source={images.appleLogo} style={styles.logo} />
            <Text style={styles.logoTxt}>Continue with Apple</Text>
          </TouchableOpacity>
          <View style={styles.alreadyCont}>
            <Text style={styles.alreadyTxt}>Already have an account?</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.login}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: vw(20),
  },
  title: {
    fontSize: vh(24),
    letterSpacing: 0.8,
    fontWeight: '500',
    color: colors.text,
    textAlign: 'center',
  },
  mainCont: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: Wheight * 0.2,
  },
  label: {
    color: colors.text,
    fontSize: vh(13),
    letterSpacing: 0.6,
    fontWeight: '400',
    marginTop: vh(30),
    paddingHorizontal: vw(10),
    marginBottom: vh(8),
  },
  input: {
    backgroundColor: colors.white,
    borderColor: colors.lightgray,
    padding: vh(12),
    borderWidth: 1,
    borderRadius: vh(20),
    fontSize: vh(14),
    color: colors.text,
    marginBottom: vh(15),
    paddingHorizontal: vw(15),
  },
  or: {
    color: colors.text,
    marginVertical: vh(20),
    textAlign: 'center',
    fontSize: vh(14),
  },
  logo: {
    width: vh(16),
    height: vh(16),
  },
  logoCont: {
    flexDirection: 'row',
    gap: vw(10),
    borderWidth: 1,
    padding: vh(12),
    borderRadius: vh(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vh(15),
    borderColor: colors.text,
  },
  logoTxt: {
    fontWeight: '600',
    fontSize: vh(14),
    color: colors.text,
  },
  alreadyCont: {
    flexDirection: 'row',
    gap: vw(5),
    marginVertical: vh(20),
    justifyContent: 'center',
  },
  alreadyTxt: {
    fontSize: vh(13),
  },
  login: {
    fontWeight: '500',
    fontSize: vh(13),
  },
  skip: {
    alignItems: 'flex-end',
    paddingTop: vh(30),
  },
  skipTxt: {
    fontSize: vh(14),
    color: colors.text,
  },
  error:{
    color: 'red',
    marginBottom: vh(15),
  }
});
