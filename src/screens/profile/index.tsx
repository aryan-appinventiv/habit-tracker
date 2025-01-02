// import {
//   Alert,
//   Image,
//   KeyboardAvoidingView,
//   Modal,
//   Platform,
//   Text,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
//   Keyboard,
//   ScrollView,
// } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { vh } from '../../utils/dimensions';
// import { colors } from '../../utils/colors';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../navigators';
// import { images } from '../../assets/images';
// import CustomInput from '../../components/customInput';
// import CustomButton from '../../components/customButton';
// import { Calendar } from 'react-native-calendars';
// import styles from './styles';
// import ImagePicker from 'react-native-image-crop-picker';
// import CustomModal from '../../components/customModal';
// import auth from '@react-native-firebase/auth';

// const Profile = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [gender, setGender] = useState('');
//   const [dob, setDob] = useState('');
//   const [calendarModal, setCalendarModal] = useState(false);
//   const [imageModal, setImageModal] = useState(false);
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [genderModal, setGenderModal] = useState(false);

//   const { top } = useSafeAreaInsets();
//   const Navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

//   // Fetch current user's information
//   useEffect(() => {
//     const user = auth().currentUser;

//     if (user) {
//       // Set user info from Firebase
//       setEmail(user.email || '');
//       setUsername(user.displayName || '');
//       setMobile(user.phoneNumber || '');
//       setProfileImage(user.photoURL || null);

//       // If using Google, Firebase will set the displayName, otherwise the email/phone will be available.
//     }
//   }, []);

//   const goback = () => {
//     Navigation.replace('BottomTab', { screen: 'Settings' });
//   };

//   const update = () => {
//     Alert.alert('Profile updated');
//     Navigation.replace('BottomTab', { screen: 'Settings' });
//   };

//   const toggleCalendarModal = () => {
//     setCalendarModal(!calendarModal);
//   };

//   const toggleImageModal = () => {
//     setImageModal(!imageModal);
//   };

//   const toggleGenderModal = () => {
//     setGenderModal(!genderModal);
//   };

//   const openCamera = () => {
//     ImagePicker.openCamera({
//       width: 300,
//       height: 400,
//       cropping: true,
//     })
//       .then(image => {
//         setProfileImage(image.path);
//         toggleImageModal();
//       })
//       .catch(() => toggleImageModal());
//   };

//   const openGallery = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true,
//     })
//       .then(image => {
//         setProfileImage(image.path);
//         toggleImageModal();
//       })
//       .catch(() => toggleImageModal());
//   };

//   const removeImage = () => {
//     setProfileImage(null);
//     toggleImageModal();
//   };

//   const dismissKeyboard = () => {
//     Keyboard.dismiss();
//   };

//   const setMale = () => {
//     setGender('Male');
//     toggleGenderModal();
//   };

//   const setFemale = () => {
//     setGender('Female');
//     toggleGenderModal();
//   };

//   const setOthers = () => {
//     setGender('Others');
//     toggleGenderModal();
//   };

//   return (
//     <KeyboardAvoidingView
//       style={[styles.container, { paddingTop: top + vh(30) }]}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <TouchableWithoutFeedback onPress={dismissKeyboard}>
//         <View style={{ flex: 1 }}>
//           <View style={styles.headerView}>
//             <TouchableOpacity
//               style={styles.backCont}
//               activeOpacity={0.7}
//               onPress={goback}
//             >
//               <Image source={images.back} style={styles.backIcon} />
//             </TouchableOpacity>
//             <View style={styles.headerCont}>
//               <Text style={styles.headerText}>User Account</Text>
//             </View>
//           </View>
//           <ScrollView showsVerticalScrollIndicator={false}>
//             <View style={styles.profileView}>
//               <TouchableOpacity onPress={toggleImageModal}>
//                 <Image
//                   source={profileImage ? { uri: profileImage } : images.user}
//                   style={styles.profileImg}
//                 />
//               </TouchableOpacity>
//               <Text style={styles.username}>{username || 'Username'}</Text>
//               <Text style={styles.userMail}>
//                 {email || mobile || 'email/phone'}
//               </Text>
//             </View>
//             <View style={styles.form}>
//               <CustomInput
//                 placeholder={`What's your name?`}
//                 value={username}
//                 onChangeText={txt => setUsername(txt)}
//               />
              
//               <TouchableOpacity
//                 style={styles.input}
//                 activeOpacity={0.7}
//                 onPress={toggleGenderModal}
//               >
//                 <Text style={styles.inputTxt}>
//                   {gender || `Select your gender`}
//                 </Text>
//                 <Image source={images.down} style={styles.backIcon} />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.input}
//                 activeOpacity={0.7}
//                 onPress={toggleCalendarModal}
//               >
//                 <Text style={styles.inputTxt}>
//                   {dob || `What is your date of birth?`}
//                 </Text>
//                 <Image source={images.calendar} style={styles.backIcon} />
//               </TouchableOpacity>
//               <View style={{ marginVertical: vh(20) }}>
//                 <CustomButton
//                   title={'Update Profile'}
//                   onPress={update}
//                   disabled={false}
//                 />
//               </View>
//             </View>
//           </ScrollView>
//         </View>
//       </TouchableWithoutFeedback>

//       {/* Calendar Modal */}
//       <Modal visible={calendarModal} animationType="fade" transparent>
//         <TouchableWithoutFeedback onPress={toggleCalendarModal}>
//           <View style={styles.modalCont}>
//             <View style={styles.modalInsideCont}>
//               <Calendar
//                 onDayPress={(day: any) => {
//                   setDob(day.dateString);
//                   toggleCalendarModal();
//                 }}
//                 markedDates={{
//                   [dob]: {
//                     selected: true,
//                     selectedColor: colors.lightgray,
//                     selectedTextColor: colors.white,
//                   },
//                 }}
//                 hideExtraDays={true}
//               />
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>

//       <CustomModal
//         visibleModal={imageModal}
//         presseable1={openCamera}
//         presseable2={openGallery}
//         presseable3={removeImage}
//         toggleModal={toggleImageModal}
//         title1="Open Camera"
//         title2="Choose from Gallery"
//         title3="Remove Image"
//       />

//       <CustomModal
//         visibleModal={genderModal}
//         presseable1={setMale}
//         presseable2={setFemale}
//         presseable3={setOthers}
//         toggleModal={toggleGenderModal}
//         title1="Male"
//         title2="Female"
//         title3="Others"
//       />
//     </KeyboardAvoidingView>
//   );
// };

// export default Profile;





// import React, { useState, useEffect } from 'react';
// import { Alert, Image, KeyboardAvoidingView, Platform, Text, TouchableOpacity, TouchableWithoutFeedback, View, ScrollView, Keyboard, Modal } from 'react-native';
// import { vh } from '../../utils/dimensions';
// import { colors } from '../../utils/colors';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../navigators';
// import { images } from '../../assets/images';
// import CustomInput from '../../components/customInput';
// import CustomButton from '../../components/customButton';
// import { Calendar } from 'react-native-calendars';
// import styles from './styles';
// import ImagePicker from 'react-native-image-crop-picker';
// import CustomModal from '../../components/customModal';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';

// const Profile = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [gender, setGender] = useState('');
//   const [dob, setDob] = useState('');
//   const [calendarModal, setCalendarModal] = useState(false);
//   const [imageModal, setImageModal] = useState(false);
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [genderModal, setGenderModal] = useState(false);

//   const { top } = useSafeAreaInsets();
//   const Navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

//   useEffect(() => {
//     const user = auth().currentUser;

//     if (user) {
//       setEmail(user.email || '');
//       setUsername(user.displayName || '');
//       setMobile(user.phoneNumber || '');
//       setProfileImage(user.photoURL || null);
//     }
//   }, []);

//   const goback = () => {
//     Navigation.replace('BottomTab', { screen: 'Settings' });
//   };

//   const update = async () => {
//     try {
//       const user = auth().currentUser;
//       if (user) {

//         let profileImageUrl = profileImage;
//         console.log(profileImageUrl);

//         if (profileImage) {
//           const imageUri = profileImage;
//           const fileName = `profile_images/${user.uid}/${Date.now()}.jpg`;
//           const reference = storage().ref(fileName);
//           try {
//             console.log("Uploading image from:", imageUri);
//             await reference.putFile(imageUri);
//             profileImageUrl = await reference.getDownloadURL();
//             console.log("Image uploaded successfully. URL:", profileImageUrl);
//           } catch (error) {
//             console.error("Error uploading image:", error);
//           }
//         }
//         await firestore().collection('users').doc(user.uid).set(
//           {
//             username,
//             email,
//             mobile,
//             gender,
//             dob,
//             profilePicture: profileImageUrl,
//           },
//           { merge: true } 
//         );

//         Alert.alert('Profile updated successfully');
//         Navigation.replace('BottomTab', { screen: 'Settings' });
//       }
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       Alert.alert('Error', 'There was an issue updating your profile. Please try again.');
//     }
//   };

//   const toggleCalendarModal = () => setCalendarModal(!calendarModal);
//   const toggleImageModal = () => setImageModal(!imageModal);
//   const toggleGenderModal = () => setGenderModal(!genderModal);

//   const openCamera = () => {
//     ImagePicker.openCamera({
//       width: 300,
//       height: 400,
//       cropping: true,
//     })
//       .then(image => {
//         setProfileImage(image.path);
//         toggleImageModal();
//       })
//       .catch(() => toggleImageModal());
//   };

//   const openGallery = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true,
//     })
//       .then(image => {
//         setProfileImage(image.path);
//         toggleImageModal();
//       })
//       .catch(() => toggleImageModal());
//   };

//   const removeImage = () => {
//     setProfileImage(null);
//     toggleImageModal();
//   };

//   const dismissKeyboard = () => Keyboard.dismiss();

//   const setMale = () => {
//     setGender('Male');
//     toggleGenderModal();
//   };

//   const setFemale = () => {
//     setGender('Female');
//     toggleGenderModal();
//   };

//   const setOthers = () => {
//     setGender('Others');
//     toggleGenderModal();
//   };

//   return (
//     <KeyboardAvoidingView style={[styles.container, { paddingTop: top + vh(30) }]} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
//       <TouchableWithoutFeedback onPress={dismissKeyboard}>
//         <View style={{ flex: 1 }}>
//           <View style={styles.headerView}>
//             <TouchableOpacity style={styles.backCont} activeOpacity={0.7} onPress={goback}>
//               <Image source={images.back} style={styles.backIcon} />
//             </TouchableOpacity>
//             <View style={styles.headerCont}>
//               <Text style={styles.headerText}>User Account</Text>
//             </View>
//           </View>
//           <ScrollView showsVerticalScrollIndicator={false}>
//             <View style={styles.profileView}>
//               <TouchableOpacity onPress={toggleImageModal}>
//                 <Image source={profileImage ? { uri: profileImage } : images.user} style={styles.profileImg} />
//               </TouchableOpacity>
//               <Text style={styles.username}>{username || 'Username'}</Text>
//               <Text style={styles.userMail}>{email || mobile || 'email/phone'}</Text>
//             </View>
//             <View style={styles.form}>
//               <CustomInput
//                 placeholder="What's your name?"
//                 value={username}
//                 onChangeText={txt => setUsername(txt)}
//               />
//               <TouchableOpacity style={styles.input} activeOpacity={0.7} onPress={toggleGenderModal}>
//                 <Text style={styles.inputTxt}>{gender || `Select your gender`}</Text>
//                 <Image source={images.down} style={styles.backIcon} />
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.input} activeOpacity={0.7} onPress={toggleCalendarModal}>
//                 <Text style={styles.inputTxt}>{dob || `What is your date of birth?`}</Text>
//                 <Image source={images.calendar} style={styles.backIcon} />
//               </TouchableOpacity>
//               <View style={{ marginVertical: vh(20) }}>
//                 <CustomButton title="Update Profile" onPress={update} disabled={false} />
//               </View>
//             </View>
//           </ScrollView>
//         </View>
//       </TouchableWithoutFeedback>

//       <Modal visible={calendarModal} animationType="fade" transparent>
//         <TouchableWithoutFeedback onPress={toggleCalendarModal}>
//           <View style={styles.modalCont}>
//             <View style={styles.modalInsideCont}>
//               <Calendar
//                 onDayPress={(day: any) => {
//                   setDob(day.dateString);
//                   toggleCalendarModal();
//                 }}
//                 markedDates={{
//                   [dob]: {
//                     selected: true,
//                     selectedColor: colors.lightgray,
//                     selectedTextColor: colors.white,
//                   },
//                 }}
//                 hideExtraDays={true}
//               />
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>

//       <CustomModal
//         visibleModal={imageModal}
//         presseable1={openCamera}
//         presseable2={openGallery}
//         presseable3={removeImage}
//         toggleModal={toggleImageModal}
//         title1="Open Camera"
//         title2="Choose from Gallery"
//         title3="Remove Image"
//       />

//       <CustomModal
//         visibleModal={genderModal}
//         presseable1={setMale}
//         presseable2={setFemale}
//         presseable3={setOthers}
//         toggleModal={toggleGenderModal}
//         title1="Male"
//         title2="Female"
//         title3="Others"
//       />
//     </KeyboardAvoidingView>
//   );
// };

// export default Profile;




import React, { useState, useEffect } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, Text, TouchableOpacity, TouchableWithoutFeedback, View, ScrollView, Keyboard, Modal, ActivityIndicator } from 'react-native';
import { vh } from '../../utils/dimensions';
import { colors } from '../../utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';
import { images } from '../../assets/images';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import { Calendar } from 'react-native-calendars';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import CustomModal from '../../components/customModal';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useRoute } from '@react-navigation/native';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); 
  const [calendarModal, setCalendarModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [genderModal, setGenderModal] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const { top } = useSafeAreaInsets();
  const Navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const route = useRoute();
  const { mobile: mobileFromOtp } = route.params as { mobile?: string } || {};

  useEffect(() => {
    if(Navigation.canGoBack()){
      setShowBack(true);
    }
    if (mobileFromOtp) {
      setMobile(mobileFromOtp); 
    }
    const fetchUserProfile = async () => {
      setLoading(true);
      const user = auth().currentUser;
      if (user) {
        try {
          const userDoc = await firestore().collection('users').doc(user.uid).get();
          if (userDoc.exists) {
            const userData = userDoc.data();
            setUsername(userData?.username || '');
            setEmail(userData?.email || user.email || '');
            setMobile(userData?.mobile || mobileFromOtp || '');
            setGender(userData?.gender || '');
            setDob(userData?.dob || '');
            setProfileImage(userData?.profilePicture || user.photoURL || '');
          }
        } catch (error) {
          console.error('Error fetching user data: ', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserProfile();
  }, []); 

  const goback = () => {
    Navigation.goBack();
  };

  const update = async () => {
    setLoading(true);
    try {
      const user = auth().currentUser;
      if (user) {
        let profileImageUrl = profileImage;

        if (profileImage) {
          const imageUri = profileImage;
          // const fileName = `profile_images/${user.uid}/${Date.now()}.jpg`;
          const fileName = `profile_images/${user.uid}.jpg`;
          const reference = storage().ref(fileName);
          try {
            await reference.putFile(imageUri);
            profileImageUrl = await reference.getDownloadURL();
          } catch (error) {
            console.error("Error uploading image:", error);
          }
        }

        await firestore().collection('users').doc(user.uid).set(
          {
            username,
            email,
            mobile,
            gender,
            dob,
            profilePicture: profileImageUrl,
          },
          { merge: true } 
        );

        Alert.alert('Profile updated successfully');
        Navigation.replace('BottomTab', { screen: 'Settings' });
      }
    } catch (error) {
      Alert.alert('Error', 'There was an issue updating your profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleCalendarModal = () => setCalendarModal(!calendarModal);
  const toggleImageModal = () => setImageModal(!imageModal);
  const toggleGenderModal = () => setGenderModal(!genderModal);

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setProfileImage(image.path);
        toggleImageModal();
      })
      .catch(() => toggleImageModal());
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setProfileImage(image.path);
        toggleImageModal();
      })
      .catch(() => toggleImageModal());
  };

  const removeImage = () => {
    setProfileImage(null);
    toggleImageModal();
  };

  const dismissKeyboard = () => Keyboard.dismiss();

  const setMale = () => {
    setGender('Male');
    toggleGenderModal();
  };

  const setFemale = () => {
    setGender('Female');
    toggleGenderModal();
  };

  const setOthers = () => {
    setGender('Others');
    toggleGenderModal();
  };

  return (
    <KeyboardAvoidingView style={[styles.container, { paddingTop: top + vh(30) }]} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={{ flex: 1 }}>
          <View style={styles.headerView}>
            {showBack && (<TouchableOpacity style={styles.backCont} activeOpacity={0.7} onPress={goback} >
              <Image source={images.back} style={styles.backIcon} />
            </TouchableOpacity>)}
            
            <View style={showBack?styles.headerCont: styles.headerContBack}>
              <Text style={styles.headerText}>User Account</Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.profileView}>
              <TouchableOpacity onPress={toggleImageModal}>
                <Image source={profileImage ? { uri: profileImage } : images.user} style={styles.profileImg} />
              </TouchableOpacity>
              <Text style={styles.username}>{username || 'Username'}</Text>
              <Text style={styles.userMail}>{email || mobile || 'email/phone'}</Text>
            </View>
            <View style={styles.form}>
              <CustomInput
                placeholder="What's your name?"
                value={username}
                onChangeText={txt => setUsername(txt)}
              />
              <TouchableOpacity style={styles.input} activeOpacity={0.7} onPress={toggleGenderModal}>
                <Text style={styles.inputTxt}>{gender || `Select your gender`}</Text>
                <Image source={images.down} style={styles.backIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.input} activeOpacity={0.7} onPress={toggleCalendarModal}>
                <Text style={styles.inputTxt}>{dob || `What is your date of birth?`}</Text>
                <Image source={images.calendar} style={styles.backIcon} />
              </TouchableOpacity>
              <View style={{ marginVertical: vh(20) }}>
                <CustomButton title="Update Profile" onPress={update} disabled={username.length<3} />
              </View>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.text} />
        </View>
      )}

      <Modal visible={calendarModal} animationType="fade" transparent>
        <TouchableWithoutFeedback onPress={toggleCalendarModal}>
          <View style={styles.modalCont}>
            <View style={styles.modalInsideCont}>
              <Calendar
                onDayPress={(day: any) => {
                  setDob(day.dateString);
                  toggleCalendarModal();
                }}
                markedDates={{
                  [dob]: {
                    selected: true,
                    selectedColor: colors.lightgray,
                    selectedTextColor: colors.white,
                  },
                }}
                hideExtraDays={true}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <CustomModal
        visibleModal={imageModal}
        presseable1={openCamera}
        presseable2={openGallery}
        presseable3={removeImage}
        toggleModal={toggleImageModal}
        title1="Open Camera"
        title2="Choose from Gallery"
        title3="Remove Image"
      />

      <CustomModal
        visibleModal={genderModal}
        presseable1={setMale}
        presseable2={setFemale}
        presseable3={setOthers}
        toggleModal={toggleGenderModal}
        title1="Male"
        title2="Female"
        title3="Others"
      />
    </KeyboardAvoidingView>
  );
};

export default Profile;
