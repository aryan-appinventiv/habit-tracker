import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const updateRepeatCompleted = async (habitId: string | number, date: string, count: number) => {
  const user = auth().currentUser;
  if (user) {
    try {
      const habitRef = firestore()
        .collection('users')
        .doc(user.uid)
        .collection('habitCategories')
        .doc(habitId.toString());

      await habitRef.update({
        [`repeatCompleted.${date}`]: count,
      });
    } catch (error) {
      console.error('Error updating repeatCompleted in Firestore:', error);
    }
  }
};
