import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import { vh } from '../../utils/dimensions';
  import { useSafeAreaInsets } from 'react-native-safe-area-context';
  import { images } from '../../assets/images';
  import { useNavigation, useRoute } from '@react-navigation/native';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import { RootStackParamList } from '../../navigators';
  import {
    SportsHabitCategories,
    SocialHabitCategories,
    LearningHabitCategories,
    FinanceHabitCategories,
    HealthyHabitCategories,
    SleepHabitCategories,
  } from '../../constants/list';
  import styles from './styles';
  
  const MoreCategories = () => {
    const { top } = useSafeAreaInsets();
    const route = useRoute();
    const { name } = route.params as { name: string };
    const Navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList, 'MoreCategories'>>();
  
    const close = () => {
      Navigation.goBack();
    };
  
    let list:any = [];
  
    
    switch (name) {
      case 'Sports':
        list = SportsHabitCategories;
        break;
      case 'Social life':
        list = SocialHabitCategories;
        break;
      case 'Learning':
        list = LearningHabitCategories;
        break;
      case 'Finance':
        list = FinanceHabitCategories;
        break;
      case 'Be healthy':
        list = HealthyHabitCategories;
        break;
      case 'Better sleep':
        list = SleepHabitCategories;
        break;
      default:
        list = []; 
    }
  
    return (
      <View style={[styles.container, { paddingTop: top + vh(30) }]}>
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
          {list.map((item:any) => (
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
  