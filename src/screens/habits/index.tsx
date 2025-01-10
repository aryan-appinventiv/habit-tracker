import {
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { vh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getStyles } from './styles';
import { useThemeColors } from '../../utils/themeSelector';
import CustomSearchBar from '../../components/customSearchBar';

const Habits = () => {
  const { top } = useSafeAreaInsets();
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const habitCategories = useSelector((state: RootState) => state.categories.habitTypes);

  const [searchText, setSearchText] = useState('');
  const [filteredHabits, setFilteredHabits] = useState(habitCategories);

  useEffect(() => {
    setFilteredHabits(habitCategories);
  }, [habitCategories]);
  
  const theme = useThemeColors();
  const styles = getStyles(theme);

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = habitCategories.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredHabits(filtered);
  };

  const gotoMore = (item:any) => {
    Navigation.navigate('Detail', {item});
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, { paddingTop: top + vh(30) }]}>
          <View style={styles.headerCont}>
            <Text style={styles.heading}> My Habits</Text>
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
            {filteredHabits.map((item: any) => (
              <TouchableOpacity
                style={[styles.itemBtn, { backgroundColor: item.clr }]}
                activeOpacity={0.7}
                onPress={() => gotoMore(item)}
                key={item.id}>
                <View style={styles.iconCont}>
                  {typeof item.icon === 'string' ? (
                    <Text>{item.icon}</Text>
                  ) : (
                    <Image source={item.icon} style={styles.iconImg} />
                  )}
                  <Text style={styles.itemBtnTxt}>{item.name}</Text>
                </View>
                <Image source={item.img} style={styles.itemImg} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Habits;
