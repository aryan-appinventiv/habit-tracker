import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { Dispatch } from 'redux';
import { removeCategory } from '../../../redux/slices/categories';

export const deleteHabitCategory = async (
  categoryId: string,
  dispatch: Dispatch,
  Navigation: any
) => {
  try {
    const user = auth().currentUser;
    if (user && categoryId) {
      // Delete the habit category from Firestore
      await firestore()
        .collection('users')
        .doc(user.uid)
        .collection('habitCategories')
        .doc(categoryId)
        .delete();

      // Dispatch the action to remove it from the Redux store
      dispatch(removeCategory(categoryId));

      // Navigate back after deletion
      Navigation.goBack();
      Alert.alert('Success', 'Habit deleted successfully');
    } else {
      Alert.alert('Error', 'Could not delete habit');
    }
  } catch (error) {
    console.error('Error deleting habit from Firestore:', error);
    Alert.alert('Error', 'There was an issue deleting the habit. Please try again.');
  }
};
