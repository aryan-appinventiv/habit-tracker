import React, { useState, useEffect } from 'react';
import { Image, KeyboardAvoidingView, Platform, Text, TouchableOpacity, TouchableWithoutFeedback, View, ScrollView, Keyboard, ActivityIndicator } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { vh } from '../../utils/dimensions';
import { colors } from '../../utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';
import { images } from '../../assets/images';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import ImagePicker from 'react-native-image-crop-picker';
import CustomModal from '../../components/customModal';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useRoute } from '@react-navigation/native';
import CustomToast from '../../components/customToast';
import { useThemeColors } from '../../utils/themeSelector';
import { getStyles } from './styles';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); 
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [genderModal, setGenderModal] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const { top } = useSafeAreaInsets();
  const Navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const route = useRoute();
  const { mobile: mobileFromOtp } = route.params as { mobile?: string } || {};

  useEffect(() => {
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
            setShowBack(true); 
          } else {
            setShowBack(false); 
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

  const theme = useThemeColors();
  const styles = getStyles(theme);

  const goback = () => {
    Navigation.reset({
      index: 0,
      routes: [{
        name: 'BottomTab', 
        params: { screen: 'Settings' } 
      }]
    })
  };

  const update = async () => {
    setLoading(true);
    try {
      const user = auth().currentUser;
      if (user) {
        let profileImageUrl = profileImage;

        if (profileImage) {
          const imageUri = profileImage;
          const fileName = `profile_images/${user.uid}/${Date.now()}.jpg`;
          const reference = storage().ref(fileName);
          try {
            await reference.putFile(imageUri);
            profileImageUrl = await reference.getDownloadURL();
          } catch (error) {
            console.log("Error uploading image:", error);
            CustomToast('error','Error', 'Error uploading image');
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
        CustomToast('success','Success', 'Profile updated successfully 👋');
        Navigation.replace('BottomTab', { screen: 'Settings' });
      }
    } catch (error) {
      //CustomToast('error','Error', 'There was an issue updating your profile. Please try again.');
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

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

  const showDatePicker = () => setDatePickerVisible(true);
  const hideDatePicker = () => setDatePickerVisible(false);

  const handleConfirmDate = (date: Date) => {
    setDob(date.toISOString().split('T')[0]);
    hideDatePicker();
  };

  return (
    <KeyboardAvoidingView style={[styles.container, { paddingTop: top + vh(30) }]} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={{ flex: 1 }}>
          <View style={styles.headerView}>
            {showBack && (<TouchableOpacity style={styles.backCont} activeOpacity={0.7} onPress={goback} >
              <Image source={images.back} style={styles.backIcon} tintColor={theme.tintIconColor} />
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
              <TouchableOpacity style={styles.input} activeOpacity={0.7} onPress={showDatePicker}>
                <Text style={styles.inputTxt}>{dob || `What is your date of birth?`}</Text>
                <Image source={images.calendar} style={styles.backIcon} />
              </TouchableOpacity>
              <View style={{ marginVertical: vh(20) }}>
                <CustomButton title="Update Profile" onPress={update} disabled={username.length<3} color={theme.buttonText} backColor={theme.buttonBackground}/>
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

      <DateTimePickerModal
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />

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
