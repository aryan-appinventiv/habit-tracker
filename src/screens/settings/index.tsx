import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {vh, vw} from '../../utils/dimensions';
import {images} from '../../assets/images';
import {colors} from '../../utils/colors';
import Separator from '../../components/seperator';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';
import { items } from '../../constants/list';
import { aboutItems } from '../../constants/list';

const Settings = () => {
  const {top: top} = useSafeAreaInsets();
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const logout=()=>{
    Navigation.reset({
        index : 0,
        routes :[{name: 'Tutorial'}]
    })
  }
  
  return (
    <View style={[styles.container, {paddingTop: top + vh(20)}]}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Text style={styles.label}>Settings</Text>
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
          <TouchableOpacity style={styles.itemBtn} activeOpacity={0.7} onPress={logout}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: vw(20),
  },
  label: {
    fontSize: vh(20),
    fontWeight: '600',
    letterSpacing: 1,
  },
  title1: {
    fontSize: vh(14),
    fontWeight: '500',
    letterSpacing: 0.5,
    marginVertical: vh(20),
  },
  itemBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vh(20),
    marginBottom: 1,
    alignItems: 'center',
  },
  itemBtnTxt: {
    fontSize: vw(14),
    fontWeight: '400',
  },
  itemImg: {
    height: vw(15),
    width: vw(15),
  },
  iconCont: {
    flexDirection: 'row',
    gap: vw(10),
    alignItems: 'center',
  },
  iconImg: {
    width: vh(18),
    height: vh(18),
  },
  list: {
    backgroundColor: colors.white,
    paddingHorizontal: vw(10),
    borderRadius: vh(15),
  },
});
