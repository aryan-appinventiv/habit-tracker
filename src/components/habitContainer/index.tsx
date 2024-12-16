import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {images} from '../../assets/images';
import styles from './styles';

interface HomeTypes {
  title: string;
  top: string | number;
  bottom: string | number;
  img: any;
  skipped: boolean;
  clr: any;
}

const HabbitContainer = ({title, top, bottom, img, skipped, clr}: HomeTypes) => {
    //console.log("color-->", clr);
  return (
    <View style={styles.habitCont}>
      <View style={styles.innerCont1}>
        <Image source={img} style={[styles.habitIcon,{backgroundColor:clr}]} />
        <Text style={styles.habitTxt}>{title}</Text>
      </View>
      <View style={styles.innerCont2}>
        {skipped ? (
          <Text style={styles.habitQuantityTxt}>Skipped</Text>
        ) : (
          <View>
            <Text style={styles.habitQuantityTxt}>
              {top}/{bottom}
            </Text>
            <Text style={styles.habitQuantityTxt}>pages</Text>
          </View>
        )}

        <TouchableOpacity style={[styles.quantity,{backgroundColor:clr}]}>
          <Image source={images.minus} style={styles.quantityIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.quantity,{backgroundColor:clr}]}>
          <Image source={images.plus} style={styles.quantityIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HabbitContainer;