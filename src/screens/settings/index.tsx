import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
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
import { changeTheme } from '../../redux/slices/theme';
import { selectTheme } from '../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';

const Settings = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);
  const {top: top} = useSafeAreaInsets();
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const logout = () => {
    Navigation.reset({
      index: 0,
      routes: [{name: 'Tutorial'}],
    });
  };
  const handleToggle = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(changeTheme(newTheme)); 
  };

  return (
    <View style={[styles.container, {paddingTop: top + vh(20)}]}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Text style={styles.label}>Settings</Text>
        <View style={styles.profileCont}>
          <View style={styles.nameCont}>
        <Image source={images.user} style={styles.profileImg} />
          <View>
            <Text style={styles.name}>El Hadji Malick Seck</Text>
            <Text style={styles.email}>elhadjimalick@gmail.com</Text>
          </View>
          </View>
          <Image source={images.edit} style={styles.iconImg} />
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
            onPress={logout}>
            <View style={styles.iconCont}>
              <Image source={images.logout} style={styles.iconImg} />
              <Text style={[styles.itemBtnTxt, {color: colors.black}]}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;
