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
import { useThemeColors } from '../../utils/themeSelector';
import { getStyles } from './styles';
import CustomSearchBar from '../../components/customSearchBar';
const Add = () => {
  const { top } = useSafeAreaInsets();
    const Navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList, 'MoreCategories'>>();
    const habitCategories = useSelector((state: RootState) => state.categories.habitTypes);
  
    const [searchText, setSearchText] = useState('');
    const [filteredHabits, setFilteredHabits] = useState(habitCategories);

    const theme = useThemeColors();
    const styles = getStyles(theme);
  
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
                <Image source={images.close} style={styles.closeImg} tintColor={theme.tintIconColor}/>
              </TouchableOpacity>
              <Text style={styles.heading}>Habits</Text>
            </View>
  
            <CustomSearchBar
            placeholder="Search"
            value={searchText}
            onChangeText={handleSearch}
          />
  
            <ScrollView
              style={styles.list}
              bounces={false}
              showsVerticalScrollIndicator={false}>
              {filteredHabits.map((item:any) => (
                <TouchableOpacity
                  style={[styles.itemBtn, { backgroundColor: item.clr }]}
                  activeOpacity={0.7}
                  key={item.id}>
                  <View style={styles.iconCont}>
                    {typeof item.icon === 'string'? (<Text>{item.icon}</Text>):(<Image source={item.icon} style={styles.iconImg} />)}
                    <Text style={styles.itemBtnTxt}>{item.name}</Text>
                  </View>
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


export default Add
