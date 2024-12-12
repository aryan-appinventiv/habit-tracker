import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';
import styles from './styles';
import { images } from '../../assets/images';

const Splash = () => {
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
     Navigation.replace('Tutorial');
    }, 1500);

    return () => clearTimeout(timer);
  }, [Navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={images.splash}
        style={styles.splashGif}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;
