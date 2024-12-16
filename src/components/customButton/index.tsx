import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import styles from './styles'

const CustomButton = ({title,onPress, disabled, color, backColor}: {title: string, onPress: ()=>void, disabled: boolean, color?: string, backColor?: string}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, {opacity: disabled? 0.7: 1, backgroundColor: backColor || colors.btnBackground}]} disabled={disabled} activeOpacity={0.7}>
        <Text style={[styles.btnTxt,{color: color || colors.background}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;
