import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'

const Separator = () => {
  return (
    <View style={styles.line}/>
  )
}

export default Separator

const styles = StyleSheet.create({
    line:{
        height: 3,
        backgroundColor: colors.background,
    }
})