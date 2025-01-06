import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {vh} from '../../utils/dimensions';
import {images} from '../../assets/images';
import {colors} from '../../utils/colors';
import Separator from '../../components/seperator';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';
import {items} from '../../constants/list';
import {aboutItems} from '../../constants/list';
import styles from './styles';
import {changeTheme} from '../../redux/slices/theme';
import {selectTheme} from '../../redux/selector';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ConfirmationModal from '../../components/confirmationModal';

const Settings = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);
  const {top} = useSafeAreaInsets();
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [ModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth().currentUser;
      if (user) {
        const userDoc = await firestore().collection('users').doc(user.uid).get();
        const userData = userDoc.data();
        if (userData) {
          setUsername(userData.username || '');
          setEmail(userData.email || user.email || '');
          setMobile(userData.mobile || '');
          setProfileImage(userData.profilePicture || user.photoURL || null);
        }
      }
    };

    fetchUserData();
  }, []);

  const toggleModal = () =>{
    setModalVisible(!ModalVisible);
  }

  const logout = () => {
    auth()
      .signOut()
      .then(response => {
        console.log("User signed out");
        Navigation.reset({
          index: 0,
          routes: [{name: 'Signup'}],
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleToggle = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(changeTheme(newTheme));
  };

  const gotoProfile = () =>{
    Navigation.navigate('Profile');
  };
  const onConfirm = ()=>{
    logout();
    toggleModal();

  }
  const onClose = ()=>{
    toggleModal();
  }

  return (
    <View style={[styles.container, {paddingTop: top + vh(20)}]}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Text style={styles.label}>Settings</Text>
        <View style={styles.profileCont}>
          <View style={styles.nameCont}>
            <Image
              source={profileImage ? { uri: profileImage } : images.user} 
              style={styles.profileImg}
            />
            <View>
              <Text style={styles.name}>{username || 'User Name'}</Text> 
              <Text style={styles.email}>{email || mobile || 'Email'}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={gotoProfile}>
            <Image source={images.edit} style={styles.iconImg} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title1}>General</Text>
        <View style={styles.list}>
          {items.map((item, id) => {
            return (
              <View key={id}>
                <TouchableOpacity style={styles.itemBtn} activeOpacity={0.7}>
                  <View style={styles.iconCont}>
                    <Image source={item.icon} style={styles.iconImg} />
                    <Text style={[styles.itemBtnTxt, {color: colors.black}]}>
                      {item.name}
                    </Text>
                  </View>
                  {item.img ? (
                    <Image source={item.img} style={styles.itemImg} />
                  ) : (
                    <Switch
                      trackColor={{
                        false: colors.trackcolor_false,
                        true: colors.trackcolor_true,
                      }}
                      thumbColor={colors.thumbcolor_true}
                      ios_backgroundColor={colors.ios_bg}
                      style={{transform: [{scale: vh(0.8)}]}}
                      value={currentTheme === 'dark'}
                      onValueChange={handleToggle}
                    />
                  )}
                </TouchableOpacity>
                <Separator />
              </View>
            );
          })}
        </View>

        <Text style={styles.title1}>About Us</Text>
        <View style={styles.list}>
          {aboutItems.map((item, id) => {
            return (
              <View key={id}>
                <TouchableOpacity style={styles.itemBtn} activeOpacity={0.7}>
                  <View style={styles.iconCont}>
                    <Image source={item.icon} style={styles.iconImg} />
                    <Text style={[styles.itemBtnTxt, {color: colors.black}]}>
                      {item.name}
                    </Text>
                  </View>
                  <Image source={item.img} style={styles.itemImg} />
                </TouchableOpacity>
                <Separator />
              </View>
            );
          })}
        </View>

        <View style={[styles.list, {marginVertical: vh(20)}]}>
          <TouchableOpacity
            style={styles.itemBtn}
            activeOpacity={0.7}
            onPress={toggleModal}>
            <View style={styles.iconCont}>
              <Image source={images.logout} style={styles.iconImg} />
              <Text style={[styles.itemBtnTxt, {color: colors.black}]}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ConfirmationModal visible={ModalVisible} onClose={onClose} onConfirm={onConfirm} title="Logout" desc="Are you sure you want to logout?"/>
    </View>
  );
};

export default Settings;
