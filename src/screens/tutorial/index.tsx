import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';
import { images } from '../../assets/images';
import { vh, vw, Wheight, Wwidth } from '../../utils/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomButton from '../../components/customButton';
import { colors } from '../../utils/colors';

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

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    img:{
        width: Wwidth/1.7,
        height: Wwidth/1.7,
    },
    heading:{
        fontSize: vh(30),
        letterSpacing: 1.3,
        fontWeight: '500',
        marginTop: vh(30),
    },
    modalHeading:{
        fontSize: vh(23),
        fontWeight: '500',
    },
    modalDesc: {
        fontSize: vh(15),
        marginTop: vh(10),
        letterSpacing: 0.8,
        marginBottom: vh(40),
    },
    modalOutCont: {
        flex:1, 
        justifyContent: 'flex-end'
    },
    modalInCont: {
        height: Wheight/3, 
        backgroundColor: colors.background, 
        paddingHorizontal: vw(20), 
        alignItems:'center',
        justifyContent:'center'
    },
})