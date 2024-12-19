import {
    Image,
    Keyboard,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    KeyboardAvoidingView,
    Platform,
  } from 'react-native';
  import React, { useState } from 'react';
  import { colors } from '../../utils/colors';
  import { vh } from '../../utils/dimensions';
  import { useSafeAreaInsets } from 'react-native-safe-area-context';
  import { images } from '../../assets/images';
  import { useNavigation } from '@react-navigation/native';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import { RootStackParamList } from '../../navigators';
  import CustomButton from '../../components/customButton';
  import { useSelector } from 'react-redux';
  import { RootState } from '../../redux/store';
  import styles from './styles';
  
  const Categories = () => {
    const { top } = useSafeAreaInsets();
    const Navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList, 'MoreCategories'>>();
    const habitCategories = useSelector((state: RootState) => state.categories.habitTypes);
  
    const [searchText, setSearchText] = useState('');
    const [filteredHabits, setFilteredHabits] = useState(habitCategories);
  
    const close = () => {
      Navigation.replace('BottomTab');
    };
  
    const handleSearch = (text: string) => {
      setSearchText(text);
      const filtered = habitCategories.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredHabits(filtered);
    };
  
    const gotoMore = (name: string) => {
      Navigation.navigate('MoreCategories', { name });
    };
  
    const addNewCategory = () => {
      Navigation.navigate('AddNewCategory');
    };
  
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[styles.container, { paddingTop: top + vh(30) }]}>
            <View style={styles.headerCont}>
              <TouchableOpacity style={styles.closeCont} onPress={close}>
                <Image source={images.close} style={styles.closeImg} />
              </TouchableOpacity>
              <Text style={styles.heading}>Habits</Text>
            </View>
  
            <View style={styles.input}>
              <Image source={images.search} style={styles.searchIcon} />
              <TextInput
                placeholder="Search"
                placeholderTextColor={colors.gray}
                style={styles.placeholder}
                value={searchText}
                onChangeText={handleSearch}
                autoCapitalize="none"
                autoComplete="off"
              />
            </View>
  
            <ScrollView
              style={styles.list}
              bounces={false}
              showsVerticalScrollIndicator={false}>
              {filteredHabits.map((item:any) => (
                // console.log("Icon-->", item.icon),
                // console.log("Img right--->", item.img),
                <TouchableOpacity
                  style={[styles.itemBtn, { backgroundColor: item.clr }]}
                  activeOpacity={0.7}
                  onPress={() => gotoMore(item.name)}
                  key={item.id}>
                  <View style={styles.iconCont}>
                    {typeof item.icon === 'string'? (<Text>{item.icon}</Text>):(<Image source={item.icon} style={styles.iconImg} />)}
                    <Text style={styles.itemBtnTxt}>{item.name}</Text>
                  </View>
                  <Image source={item.img} style={styles.itemImg} />
                </TouchableOpacity>
              ))}
            </ScrollView>
  
            <View style={styles.buttonCont}>
              <CustomButton
                title="Create your own"
                color={colors.text}
                backColor={colors.tabIcon}
                onPress={addNewCategory}
                disabled={false}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  };
  
  export default Categories;
  