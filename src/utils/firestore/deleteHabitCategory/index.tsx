import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Dispatch } from 'redux';
import { removeCategory } from '../../../redux/slices/categories';
import CustomToast from '../../../components/customToast';

export const deleteHabitCategory = async (
  categoryId: string,
  dispatch: Dispatch,
  Navigation: any
) => {
  try {
    const user = auth().currentUser;
    if (user && categoryId) {
      await firestore()
        .collection('users')
        .doc(user.uid)
        .collection('habitCategories')
        .doc(categoryId)
        .delete();

      dispatch(removeCategory(categoryId));

      Navigation.goBack();
      CustomToast('success', 'Success', 'Habit deleted successfully');
    } else {
      CustomToast('error', 'Error', 'Could not delete habit');
    }
  } catch (error) {
    console.error('Error deleting habit from Firestore:', error);
    CustomToast('error', 'There was an issue deleting the habit.', 'Please try again.');
  }
};
