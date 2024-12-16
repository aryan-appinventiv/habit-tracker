import { Image, Modal, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';
import { images } from '../../assets/images';
import { vh } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomButton from '../../components/customButton';
import styles from './styles';

const Tutorial = () => {
    const [showModal, setShowModal] = useState(false);
    useEffect(()=>{
        setTimeout(()=>setShowModal(true), 1000);   
    }, [])
    const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();  
    const {top: top} = useSafeAreaInsets();
    const gotoSignup=()=>{
        Navigation.replace('Signup');
    }
    return (
    <View style={[styles.container,{paddingTop: top + vh(50)}]}>
      <Image source={images.splash} style={styles.img}/>
      <Text style={styles.heading}>Progressly</Text>
      <Modal transparent={true} visible={showModal} animationType='slide'>
        <View style={styles.modalOutCont}>
            <View style={styles.modalInCont}>
                <Text style={styles.modalHeading}>Welcome</Text>
                <Text style={styles.modalDesc}>The best version of yourself is yet to come</Text>
                <CustomButton title={"Go ahead"} onPress={gotoSignup} disabled={false} />
            </View>
        </View>
      </Modal>
    </View>
  )
}

export default Tutorial
