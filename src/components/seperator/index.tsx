import { View } from 'react-native'
import React from 'react'
import { useThemeColors } from '../../utils/themeSelector';
import { getStyles } from './styles';

const Separator = () => {
  const theme = useThemeColors();
  const styles = getStyles(theme);
  return (
    <View style={styles.line}/>
  )
}
export default Separator;

