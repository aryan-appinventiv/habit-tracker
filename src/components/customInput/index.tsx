import { TextInput } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';
import styles from './styles';

interface CustomInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyType?: any;
  max?: number|string;
}

const CustomInput = ({ placeholder, value, onChangeText, keyType, max }: CustomInputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      autoCapitalize="none"
      autoComplete="off"
      placeholderTextColor={colors.gray}
      value={value}
      onChangeText={onChangeText} 
      keyboardType={keyType}
      maxLength={10}
    />
  );
};

export default CustomInput;