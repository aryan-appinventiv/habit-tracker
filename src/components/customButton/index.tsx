import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { vh } from '../../utils/dimensions'
import { colors } from '../../utils/colors'

const CustomButton = ({title,onPress, disabled, color, backColor}: {title: string, onPress: ()=>void, disabled: boolean, color?: string, backColor?: string}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, {opacity: disabled? 0.7: 1, backgroundColor: backColor || colors.btnBackground}]} disabled={disabled} activeOpacity={0.7}>
        <Text style={[styles.btnTxt,{color: color || colors.background}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    btn:{
        width: '100%',
        alignItems: 'center',
        borderRadius: vh(20),
    },
    btnTxt:{
        letterSpacing: 1.5,
        padding: vh(12),
        fontSize: vh(15),
        fontWeight: '600',
    },
})