import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {vh, vw} from '../../utils/dimensions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../../assets/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';
import {moreHabitCategories} from '../../constants/list';

const MoreCategories = () => {
  const {top} = useSafeAreaInsets();
  const route = useRoute();
  const {name} = route.params as {name: string};
  const Navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'MoreCategories'>
    >();

  const close = () => {
    Navigation.goBack();
  };
  return (
    <View style={[styles.container, {paddingTop: top + vh(30)}]}>
      <View style={styles.headerCont}>
        <TouchableOpacity style={styles.closeCont} onPress={close}>
          <Image source={images.back} style={styles.closeImg} />
        </TouchableOpacity>
        <Text style={styles.heading}>{name}</Text>
      </View>

      <ScrollView
        style={styles.list}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        {moreHabitCategories.map(item => (
          <TouchableOpacity
            style={styles.itemBtn}
            activeOpacity={0.7}
            key={item.id}>
            <View style={styles.iconCont}>
              <Image source={item.icon} style={styles.iconImg} />
              <View style={styles.textCont}>
                <Text style={styles.itemBtnTxt}>{item.name}</Text>
                <Text style={styles.itemBtnDesc}>{item.desc}</Text>
              </View>
            </View>
            <Image source={item.img} style={styles.itemImg} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MoreCategories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: vw(20),
  },
  headerCont: {
    flexDirection: 'row',
    gap: vw(17),
    alignItems: 'center',
  },
  closeImg: {
    height: vh(20),
    width: vh(20),
  },
  closeCont: {
    height: vh(30),
    width: vh(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: vh(24),
    fontWeight: '500',
    letterSpacing: 1,
    color: colors.text,
  },
  itemBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vh(10),
    marginTop: vh(13),
    alignItems: 'center',
    paddingHorizontal: vw(15),
    borderRadius: vh(10),
    backgroundColor: colors.white,
  },
  itemBtnTxt: {
    fontSize: vw(16),
    fontWeight: '500',
    letterSpacing: 1,
  },
  itemImg: {
    height: vw(20),
    width: vw(20),
  },
  iconCont: {
    flexDirection: 'row',
    gap: vw(15),
    alignItems: 'center',
  },
  iconImg: {
    width: vh(18),
    height: vh(18),
  },
  list: {
    marginTop: vh(10),
    marginBottom: vh(30),
  },
  textCont:{
    gap: vh(5),
  },
  itemBtnDesc:{
    color: colors.gray,
  }
});
