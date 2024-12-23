import React, {useState} from 'react';
import {View, TextInput, Text, Image, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import { images } from '../../assets/images';
import styles from './styles';
import {RootStackParamList} from '../../navigators';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'ForgotPassword'
>;
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState('');

  const Navigation = useNavigation<NavigationProps>();

  const handlePasswordReset = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      seterror('login_email_error1');
    } else if (!emailPattern.test(email)) {
      seterror('login_email_error2');
    }

    setLoading(true);
    try {
      await auth().sendPasswordResetEmail(email);
      console.log('resend email sent')
      setEmail('');
      //Navigation.replace('Signin');
    } catch (error: any) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.secondCont}>
        <Text style={styles.title}>reset_password</Text>
        <Text style={styles.desc}>reset_pass_link_send</Text>
        <View style={styles.inputBox}>
          <Image source={images.mail} style={styles.icon} />
          <TextInput
            value={email}
            onChangeText={text => {
              setEmail(text), seterror('');
            }}
            placeholder={'email_address'}
            autoCapitalize="none"
            style={styles.textInput}
            autoFocus={true}
          />
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
        <TouchableOpacity
          onPress={handlePasswordReset}
          style={styles.register}
          disabled={loading}>
          <Text style={styles.registerTitle}>
            {loading ? 'sending' : 'send_password_reset_email'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;
