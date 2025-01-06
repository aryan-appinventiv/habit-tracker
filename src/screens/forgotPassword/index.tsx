import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../assets/images';
import styles from './styles';
import {RootStackParamList} from '../../navigators';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomTextInput from '../../components/customTextInput';
import CustomButton from '../../components/customButton';
import CustomToast from '../../components/customToast';
import { validateEmail } from '../../utils/validation';

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'ForgotPassword'
>;
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const {top} = useSafeAreaInsets();

  const Navigation = useNavigation<NavigationProps>();

  const handlePasswordReset = async () => {
    setError(validateEmail(email));
    setLoading(true);
    try {
      await auth().sendPasswordResetEmail(email);
      CustomToast('info', 'resend email sent');
      setEmail('');
      Navigation.goBack();
    } catch (error: any) {
      console.log(error);
      CustomToast('error', 'failed to resent email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.Container, {paddingTop: top}]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainCont}>
        <Text style={styles.heading}>Reset Password</Text>
        <CustomTextInput
            value={email}
            onChangeText={text => {
              setEmail(text);
              setError('');
            }}
            placeholder="xyz@email.com"
            error={error}
            icon={images.mail}
            autoCapitalize="none"
            secureTextEntry={false}
            showToggle={false}
            label= "Enter your email"
          />
            <View style={styles.btn}>
              <CustomButton onPress={handlePasswordReset} title={loading? 'Sending':'Reset'} disabled={email.trim().length<=0} />
            </View>
      </View>
    
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
