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
import auth from '@react-native-firebase/auth';
import CustomButton from '../../components/customButton';
import {images} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';
import {colors} from '../../utils/colors';
import styles from './styles';
import { onGoogleButtonPress } from '../../config/firebase/GoogleSiginIn';

const Signup = () => {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState<string>('');
  const {top: top} = useSafeAreaInsets();
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Signup'>>();
  const [loading, setLoading] = useState(false);

  async function gotoGoogle() {
    try {
      const data = await onGoogleButtonPress();
      if (!data) {
        console.log('Error: No data');
        return;
      }
      console.log('success -> ', data);
      Navigation.replace("Profile")
    } catch (error) {
      console.error('Error:', error);
    }
  }

 
  const sendOtp = async () => {
    setLoading(true);
    try {
      const confirmation = await auth().signInWithPhoneNumber(mobile);
      setLoading(false);
      Navigation.navigate('OTP', {mobile, confirmation});
    } catch (err) {
      setLoading(false);
      setError('Failed to send OTP. Please try again.');
      console.error(err);
    }
  };

  const handleEmail = () =>{
    Navigation.navigate('RegisterWithEmail');
  }
  const handleLogin=()=>{
    Navigation.navigate('Signin');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.container, {paddingTop: top}]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainCont}>
          <Text style={styles.title}>Sign up</Text>
          <Text style={styles.label}>Enter your Number</Text>
          <TextInput
            placeholder="Mobile number"
            style={styles.input}
            autoCapitalize="none"
            autoComplete="off"
            placeholderTextColor={colors.gray}
            value={mobile}
            onChangeText={txt => [setMobile(txt), setError('')]}
            keyboardType="number-pad"
            maxLength={15}
            returnKeyType="done"
            onSubmitEditing={sendOtp}
          />
          {error && <Text style={styles.error}>{error}</Text>}
          <CustomButton
            title="Continue"
            onPress={sendOtp}
            disabled={mobile.trim().length < 1 || loading}
          />
          <Text style={styles.or}>or</Text>
          <TouchableOpacity
            style={styles.logoCont}
            activeOpacity={0.7}
            onPress={gotoGoogle}>
            <Image source={images.googleLogo} style={styles.logo} />
            <Text style={styles.logoTxt}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoCont} activeOpacity={0.7} onPress={handleEmail}>
            <Image source={images.mail} style={styles.logo} />
            <Text style={styles.logoTxt}>Continue with Email</Text>
          </TouchableOpacity>
          <View style={styles.alreadyCont}>
            <Text style={styles.alreadyTxt}>Already have an account?</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={handleLogin}>
              <Text style={styles.login}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signup;
