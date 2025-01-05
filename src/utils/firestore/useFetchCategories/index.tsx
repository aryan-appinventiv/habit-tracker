import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { setCategories } from '../../../redux/slices/categories';
import auth from '@react-native-firebase/auth';

const useFetchCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      const user = auth().currentUser;
      if (user) {
        try {
          const snapshot = await firestore()
            .collection('users')
            .doc(user.uid)
            .collection('habitCategories')
            .get();

          const categories = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          dispatch(setCategories(categories));
        } catch (error) {
          console.error('Error fetching categories from Firestore:', error);
        }
      }
    };

    fetchCategories();
  }, [dispatch]);
};

export default useFetchCategories;
