import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';

const Add = () => {
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
     Navigation.replace('Categories');
    }, 0);

    return () => clearTimeout(timer);
  });

  return (
    <></>
  )
}

export default Add

const styles = StyleSheet.create({})