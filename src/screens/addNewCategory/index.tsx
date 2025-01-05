import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  Modal,
  TouchableWithoutFeedback,
  Switch,
  ScrollView,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../redux/slices/categories';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators';
import { colors } from '../../utils/colors';
import { vh } from '../../utils/dimensions';
import { images } from '../../assets/images';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomInput from '../../components/customInput';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import EmojiPicker, { EmojiType } from 'rn-emoji-keyboard';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ColorPicker, {
  Panel1,
  Swatches,
  Preview,
  OpacitySlider,
  HueSlider,
} from 'reanimated-color-picker';
import CustomButton from '../../components/customButton';
import styles from './styles';
import moment from 'moment';
import { day } from '../../constants/list';
import { RootState } from '../../redux/store';

const AddNewCategory = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [nameError, setNameError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [hexColor, setHexColor] = useState('');
  const [isPickerVisible, setPickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [timeError, setTimeError] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [emoji, setEmoji] = useState('📱');
  const [frequency, setFrequency] = useState<number[]>([]);
  const [repeat, setRepeat] = useState(1);
  const [frequencyError, setFrequencyError] = useState('');

  const today = moment().format('YYYY-MM-DD');
  const { top } = useSafeAreaInsets();
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const todayDate = new Date(today);
  const todayDay = todayDate.getDay();
  const habitTypes = useSelector((state: RootState) => state.categories.habitTypes);

  const handleAddCategory = async () => {
    if (!name.trim()) {
      setNameError('Category name is required');
      return;
    }
  
    if (!selectedTime.trim()) {
      setTimeError('Please select a time');
      return;
    }
  
    if (frequency.length === 0) {
      setFrequencyError('Please select at least one day.');
      return;
    }
  
    const nameExists = habitTypes.some(habit => habit.name.toLowerCase() === name.trim().toLowerCase());
    if (nameExists) {
      Alert.alert('Duplicate Habit', 'A habit with this name already exists.');
      return;
    }
  
    const newCategory = {
      id: Date.now().toString(),
      name,
      clr: hexColor ? hexColor : colors.pink,
      icon: emoji,
      img: images.right,
      today,
      todayDay,
      frequency,
      selectedTime,
      repeat,
      repeatCompleted: {},
    };
  
    try {
      const user = auth().currentUser;
      if (user) {
        await firestore()
          .collection('users')
          .doc(user.uid)
          .collection('habitCategories')
          .doc(newCategory.id)
          .set(newCategory);
      }
  
      dispatch(addCategory(newCategory));
  
      navigation.reset({
        index: 0,
        routes: [{ name: 'BottomTab', params: { screen: 'Habits' } }],
      });
    } catch (error) {
      console.error('Error saving category to Firestore:', error);
      Alert.alert('Error', 'There was an issue saving the habit. Please try again.');
    }
  };
  const close = () => {
    navigation.goBack();
  };

  const addFrequency = (dayId: number) => {
    setFrequency((prevFrequency) => {
      const updatedFrequency = prevFrequency.includes(dayId)
        ? prevFrequency.filter((day) => day !== dayId)
        : [...prevFrequency, dayId];

      if (updatedFrequency.length > 0) {
        setFrequencyError('');
      }

      return updatedFrequency;
    });
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { paddingTop: top + vh(30) }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.headerCont}>
        <TouchableOpacity style={styles.closeCont} onPress={close}>
          <Image source={images.close} style={styles.closeImg} />
        </TouchableOpacity>
        <Text style={styles.heading}>Habit</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Name</Text>
        <CustomInput
          placeholder="Enter category name"
          value={name}
          onChangeText={(text) => {
            setName(text);
            if (text.trim()) setNameError('');
          }}
        />
        {nameError && <Text style={styles.error}>{nameError}</Text>}

        <Text style={[styles.label, styles.mv]}>Description</Text>
        <CustomInput
          placeholder="Optional"
          value={desc}
          onChangeText={(text) => setDesc(text)}
        />

        <View style={styles.insideCont}>
          <View style={styles.insideInput}>
            <TouchableOpacity style={styles.input} onPress={() => setShowModal(true)}>
              <View
                style={[
                  styles.colorView,
                  { backgroundColor: hexColor ? hexColor : colors.pink },
                ]}
              />
              <Text style={styles.colorTxt}>Color</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.insideInput}>
            <TouchableOpacity style={styles.input} onPress={() => setIsOpen(!isOpen)}>
              <Text style={styles.emojiTxt}>{emoji}</Text>
              <Text style={styles.colorTxt}>Icon</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.frequency}>
          <Text style={styles.label}>Frequency</Text>
          <View style={styles.daysCont}>
            {day.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.days,
                  frequency.includes(item.id) && styles.selectedDay,
                ]}
                onPress={() => addFrequency(item.id)}
              >
                <Text style={styles.dayText}>{item.show}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {frequencyError && <Text style={styles.error}>{frequencyError}</Text>}
        </View>

        <View style={[styles.repeatCont, styles.inCont, styles.mt]}>
          <Text style={styles.inTxt}>Goal</Text>
          <Switch />
        </View>

        <TouchableOpacity
          style={[styles.repeatCont, styles.inCont, styles.mt, styles.pdng]}
          activeOpacity={0.7}
          onPress={() => setPickerVisibility(!isPickerVisible)}
        >
          <Text style={styles.inTxt}>Time range</Text>
          {selectedTime && <Text style={styles.selectedTime}>{selectedTime}</Text>}
          <View>
            <Image source={images.down} style={styles.icon} />
          </View>
        </TouchableOpacity>
        {timeError && <Text style={styles.error}>{timeError}</Text>}

        <View style={[styles.repeatCont, styles.inCont, styles.mt, { paddingVertical: vh(10) }]}>
          <Text style={styles.inTxt}>Repeat</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: colors.pink, padding: vh(10), borderRadius: vh(10) }} onPress={() => setRepeat(prevRepeat => prevRepeat - 1)}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: vh(17), padding: vh(10) }}>{repeat}</Text>
            <TouchableOpacity style={{ backgroundColor: colors.pink, padding: vh(10), borderRadius: vh(10) }} onPress={() => setRepeat(prevRepeat => prevRepeat + 1)}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.btn}>
          <CustomButton
            title="Add Category"
            onPress={handleAddCategory}
            disabled={false}
            backColor={colors.tabIcon}
            color={colors.text}
          />
        </View>
      </ScrollView>

      <Modal visible={showModal} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <View style={styles.modalCont}>
            <View style={styles.modalInsideCont}>
              <ColorPicker value={colors.pink} onComplete={(color) => setHexColor(color.hex)}>
                <Preview />
                <Panel1 />
                <HueSlider />
                <OpacitySlider />
                <Swatches />
              </ColorPicker>
              <TouchableOpacity onPress={() => setShowModal(false)} style={styles.ok}>
                <Text style={styles.okTxt}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode="time"
        is24Hour={true}
        onConfirm={(date) => {
          setSelectedTime(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
          setPickerVisibility(false);
          setTimeError('');
        }}
        onCancel={() => setPickerVisibility(false)}
        date={new Date()}
      />
      <EmojiPicker
        onEmojiSelected={(emojiObject) => setEmoji(emojiObject.emoji)}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </KeyboardAvoidingView>
  );
};

export default AddNewCategory;
