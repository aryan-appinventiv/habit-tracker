import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';
import { vh, vw } from '../../utils/dimensions';

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

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    borderColor: colors.lightgray,
    padding: vh(12),
    borderWidth: 1,
    borderRadius: vh(20),
    fontSize: vh(14),
    color: colors.text,
    marginBottom: vh(20),
    paddingHorizontal: vw(15),
  },
});
