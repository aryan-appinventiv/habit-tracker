import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigators';

export const onLogin = async (
  email: string,
  password: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  Navigation: NavigationProp<RootStackParamList>
) => {
  setIsLoading(true);
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const user = response.user;

    if (user.emailVerified) {
      const userDoc = await firestore().collection('users').doc(user.uid).get();

      if (userDoc.exists && userDoc.data()?.username) {
        Navigation.reset({
          index: 0,
          routes: [{ name: 'BottomTab' }],
        });
      } else {
        Navigation.reset({
          index: 0,
          routes: [{ name: 'Profile' }],
        });
      }
    } else {
      Alert.alert('Email not verified', 'Verify email', [
        {
          text: 'Resend email',
          onPress: () => user.sendEmailVerification(),
        },
        { text: 'Ok' },
      ]);
      await auth().signOut();
    }
  } catch (error) {
    Alert.alert('Error', 'email and password do not match');
  } finally {
    setIsLoading(false);
  }
};
