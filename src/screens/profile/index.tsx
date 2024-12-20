import { Alert, Image, KeyboardAvoidingView, Modal, Platform, Text, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, ScrollView } from 'react-native';
import React, { useState } from 'react';
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

const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [calendarModal, setCalendarModal] = useState(false);

  const { top } = useSafeAreaInsets();
  const Navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goback = () => {
    Navigation.replace('BottomTab',{screen: 'Settings'})
  };

  const update = () => {
    Alert.alert('Profile updated');
    Navigation.replace('BottomTab',{screen: 'Settings'})
  };

  const toggleCalendarModal = () => {
    setCalendarModal(!calendarModal);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { paddingTop: top + vh(30) }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={{ flex: 1 }}>
          <View style={styles.headerView}>
            <TouchableOpacity style={styles.backCont} activeOpacity={0.7} onPress={goback}>
              <Image source={images.back} style={styles.backIcon} />
            </TouchableOpacity>
            <View style={styles.headerCont}>
              <Text style={styles.headerText}>User Account</Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} >
          <View style={styles.profileView}>
            <Image source={images.user} style={styles.profileImg} />
            <Text style={styles.username}>Username</Text>
            <Text style={styles.userMail}>email</Text>
          </View>
          <View style={styles.form}>
            <CustomInput placeholder={`What's your name?`} value={username} onChangeText={txt => setUsername(txt)} />
            <CustomInput placeholder='Setup email' value={email} onChangeText={txt => setEmail(txt)} keyType={'email-address'} />
            <CustomInput placeholder='Phone number' value={mobile} onChangeText={txt => setMobile(txt)} keyType={'number-pad'} max={10}/>
            {/* <CustomInput placeholder='Select your gender' value={gender} onChangeText={txt => setGender(txt)} /> */}
            <TouchableOpacity
              style={styles.input}
              activeOpacity={0.7}
              onPress={toggleCalendarModal}
            >
              <Text style={styles.inputTxt}>{dob || `What is your date of birth?` }</Text>
              <Image source={images.calendar} style={styles.backIcon} />
            </TouchableOpacity>
            <View style={{marginVertical: vh(20)}}>
              <CustomButton title={'Update Profile'} onPress={update} disabled={false} />
            </View>
           
          </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>

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
    </KeyboardAvoidingView>
  );
};

export default Profile;

