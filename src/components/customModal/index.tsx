import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import CustomButton from '../customButton';
import Separator from '../seperator';
import { vh } from '../../utils/dimensions';

interface CustomModalProps {
  visibleModal: boolean;
  presseable1: () => void;
  presseable2: () => void;
  presseable3: () => void;
  toggleModal: () => void;
  title1: string;
  title2: string;
  title3: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visibleModal,
  presseable1,
  presseable2,
  presseable3,
  toggleModal,
  title1,
  title2,
  title3,
}) => {
  return (
    <Modal visible={visibleModal} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View style={styles.modalCont}>
          <View style={styles.modalInsideCont}>
            <CustomButton title={title1} onPress={presseable1} disabled={false}/>
            <Separator />
            <CustomButton title={title2} onPress={presseable2} disabled={false} />
            <Separator />
            <CustomButton title={title3} onPress={presseable3} disabled={false} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalCont: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalInsideCont: {
    paddingBottom: vh(30),
    width: '100%',
  },
});