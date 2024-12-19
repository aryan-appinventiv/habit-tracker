import {StyleSheet, Text, View, Modal, Image, Pressable} from 'react-native';
import React from 'react';
import { vh, vw } from '../../utils/dimensions';


const CustomModal = props => {
  const {
    modalVisible,
    onRequestClose,
    buttonText = 'Okay',
    headText,
    TextContent,
    Img,
    handleModal,
    Imgbg,
    customModalViewStyle,
  } = props;
  return (
    <Modal
      
      animationType="fade"
      visible={modalVisible}
      onRequestClose={onRequestClose}
      {...props}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          
          <View style={Imgbg? styles.modalViews:styles.modalView}>
            <Image source={Img} style={styles.img}/>
          </View>
          <Text style={styles.modalheading}>{headText}</Text>
          <View>
            <Text style={styles.modalText1}>{TextContent}</Text>
          </View>
          {Imgbg?<Pressable style={styles.modalButton} onPress={handleModal}>
            <Text style={styles.modalButtonText}>{buttonText}</Text>
          </Pressable>:null}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalView: {
    height: vh(50),
    width: vh(50),
    borderRadius: vh(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#E8E8E8',
    opacity: 0.5,
  },
  modalViews: {
    height: vh(50),
    width: vh(50),
    borderRadius: vh(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F79E98',
    opacity: 0.5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    marginHorizontal:vh(20),
    padding: vh(20),
    backgroundColor: 'white',
    borderRadius: vh(10),
    alignItems: 'center',
  },
  modalheading: {
    fontSize: vh(20),
    marginBottom: vh(5),
    marginTop: vh(15),
    fontWeight: '700',
    lineHeight: vh(26),
  },

  modalText1: {
    marginHorizontal: vw(35),
    fontSize: vh(13),
    textAlign: 'center',
    fontWeight: '300',
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#4D5876',
    lineHeight: vh(19.5),
    marginBottom: vh(20),
  },
  modalButton: {
    paddingVertical: vh(10),
    paddingHorizontal: vw(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A7BBB',
    borderRadius: vh(5),
  },
  modalButtonText: {
    color: 'white',
    fontSize: vh(15),
    fontWeight: '600',
  },
  bg:{
    backgroundColor: '#F79E98',
  },
  img: {
    height:vh(25),
    width:vh(25)
},
});