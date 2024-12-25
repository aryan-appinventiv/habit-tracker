import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import styles from './styles';
import { images } from '../../assets/images';

type CustomTextInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  error?: string;
  secureTextEntry?: boolean;
  toggleSecureEntry?: () => void;
  icon: ImageSourcePropType;
  showToggle?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  label?: string;
};

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  error,
  secureTextEntry = false,
  toggleSecureEntry,
  icon,
  showToggle = false,
  autoCapitalize = 'none',
  label,
}) => {
  return (
    <View>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.inputBox}>
      <Image source={icon} style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        style={styles.textInput}
      />
      {showToggle && toggleSecureEntry && (
        <TouchableOpacity onPress={toggleSecureEntry}>
          <Image
            source={secureTextEntry ? images.eye : images.eyeclose}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
    {error && error.length > 0 && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;
