import { TextInput } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';
import styles from './styles';

interface CustomInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomInput = ({ placeholder, value, onChangeText }: CustomInputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      autoCapitalize="none"
      autoComplete="off"
      placeholderTextColor={colors.gray}
      value={value}
      onChangeText={onChangeText} 
    />
  );
};

export default CustomInput;