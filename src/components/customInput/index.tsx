import { TextInput } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';
import styles from './styles';

interface CustomInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyType?: any;
  max?: number;
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
      maxLength={max || 25}
    />
  );
};

export default CustomInput;