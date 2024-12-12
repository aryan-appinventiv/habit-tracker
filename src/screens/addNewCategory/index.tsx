import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  TextInput,
  Modal,
  Button,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addCategory} from '../../redux/slices/categories';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';
import {colors} from '../../utils/colors';
import {vh, vw} from '../../utils/dimensions';
import {images} from '../../assets/images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomInput from '../../components/customInput';
//import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';

const AddNewCategory = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [color, setColor] = useState('');
  const [nameError, setNameError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const {top} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleAddCategory = () => {
    if (!name.trim()) {
      setNameError('Category name is required');
      return;
    }

    const newCategory = {
      id: Date.now().toString(),
      name,
      clr: color,
      icon: images.right,
      img: null,
    };

    dispatch(addCategory(newCategory));
    navigation.goBack();
  };

  const close = () => {
    navigation.goBack();
  };
//   const onSelectColor = ({ hex }) => {
//     // do something with the selected color.
//     console.log(hex);
//   };
  const toggleModal = ()=>{
     setShowModal(!showModal);
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, {paddingTop: top + vh(30)}]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.headerCont}>
        <TouchableOpacity style={styles.closeCont} onPress={close}>
          <Image source={images.close} style={styles.closeImg} />
        </TouchableOpacity>
        <Text style={styles.heading}>Habit</Text>
      </View>

      <View>
        <Text style={styles.label}>Category Name</Text>
        <CustomInput
          placeholder="Enter category name"
          value={name}
          onChangeText={text => {
            setName(text);
            if (text.trim()) setNameError('');
          }}
        />
        {nameError && <Text style={styles.error}>{nameError}</Text>}

        <Text style={styles.label}>Description</Text>
        <CustomInput
          placeholder="Optional"
          value={desc}
          onChangeText={text => {
            setDesc(text);
          }}
        />

        <View style={styles.insideCont}>
          <View style={styles.insideInput}>
            <TouchableOpacity style={styles.input} onPress={toggleModal}>
              <Text style={{fontSize: vh(14)}}>Color</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.insideInput}>
            <CustomInput
              placeholder="Enter color"
              value={color}
              onChangeText={text => {
                setName(text);
                if (text.trim()) setNameError('');
              }}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddCategory}>
        <Text style={styles.buttonText}>Add Category</Text>
      </TouchableOpacity>

      {/* <Modal visible={showModal} animationType='slide'>
        <ColorPicker style={{ width: '70%' }} value='red' onComplete={onSelectColor}>
          <Preview />
          <Panel1 />
          <HueSlider />
          <OpacitySlider />
          <Swatches />
        </ColorPicker>

        <Button title='Ok' onPress={() => setShowModal(false)} />
      </Modal> */}
    </KeyboardAvoidingView>
  );
};

export default AddNewCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: vw(20),
  },
  headerCont: {
    flexDirection: 'row',
    gap: vw(25),
    alignItems: 'center',
    marginBottom: vh(20),
  },
  closeImg: {
    height: vh(18),
    width: vh(18),
  },
  closeCont: {
    height: vh(30),
    width: vh(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: vh(24),
    fontWeight: '500',
    letterSpacing: 1,
    color: colors.text,
  },
  error: {
    color: 'red',
  },
  label: {
    fontSize: vh(15),
    marginBottom: vh(8),
    color: colors.text,
    paddingHorizontal: vw(10),
  },
  button: {
    backgroundColor: colors.tabIcon,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  insideCont: {
    flexDirection: 'row',
    gap: vw(15),
  },
  insideInput: {
    flex: 1,
  },
  input: {
    backgroundColor: colors.white,
    borderColor: colors.lightgray,
    padding: vh(12),
    borderWidth: 1,
    borderRadius: vh(20),
    fontSize: vh(14),
    color: colors.text,
    marginBottom: vh(20),
    paddingHorizontal: vw(15),
  },
});
