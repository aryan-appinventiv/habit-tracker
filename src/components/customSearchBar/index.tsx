import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useThemeColors } from '../../utils/themeSelector';
import { getStyles } from './styles';
import { images } from '../../assets/images';
import { colors } from '../../utils/colors';

const CustomSearchBar = ({placeholder, value, onChangeText}:{placeholder:string,value:any,onChangeText:any}) => {
    const theme = useThemeColors();
    const styles = getStyles(theme);
  return (
    <View style={styles.input}>
            <Image source={images.search} style={styles.searchIcon} />
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={colors.gray}
              style={styles.placeholder}
              value={value}
              onChangeText={onChangeText}
              autoCapitalize="none"
              autoComplete="off"
            />
    </View>
  )
}

export default CustomSearchBar