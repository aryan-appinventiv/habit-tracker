import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomButton from '../../components/customButton';
import {images} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';
import { colors } from '../../utils/colors';
import { emailPattern } from '../../constants/regex';
import styles from './styles';

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
