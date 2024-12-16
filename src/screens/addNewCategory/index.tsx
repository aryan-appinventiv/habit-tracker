import React, {useState} from 'react';
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
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addCategory} from '../../redux/slices/categories';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';
import {colors} from '../../utils/colors';
import {vh} from '../../utils/dimensions';
import {images} from '../../assets/images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomInput from '../../components/customInput';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import EmojiPicker, {EmojiType} from 'rn-emoji-keyboard';
import ColorPicker, {
  Panel1,
  Swatches,
  Preview,
  OpacitySlider,
  HueSlider,
} from 'reanimated-color-picker';
import CustomButton from '../../components/customButton';
import styles from './styles';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import { day } from '../../constants/list';

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
  const [calendarModal, setCalendarModal] = useState(false);
  const [selected, setSelected] = useState('');
  const [days, setDays] = useState(false);
  const [frequency, setFrequency] = useState<string[]>([]);

  const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD'); 
  const {top} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleAddCategory = () => {
    if (!name.trim()) {
      setNameError('Category name is required');
      return;
    }

    if(!selectedTime.trim()){
      setTimeError('Please select a time');
      return;
    }

    const newCategory = {
      id: Date.now().toString(),
      name,
      clr: hexColor ? hexColor : colors.pink,
      icon: emoji,
      img: images.right,
    };

    dispatch(addCategory(newCategory));
    //navigation.goBack();
    navigation.replace('BottomTab', {screen: 'Habits'});
  };

  const close = () => {
    //navigation.goBack();
    navigation.replace('BottomTab', {screen: 'Habits'});
  };
  const onSelectColor = ({hex}: {hex: string}) => {
    setHexColor(hex);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleTimePicker = () => {
    setPickerVisibility(!isPickerVisible);
  };
  const handleConfirm = (date: any) => {
    const formattedTime = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    setSelectedTime(formattedTime);
    toggleTimePicker();
    setTimeError('');
  };

  const handlePick = (emojiObject: EmojiType) => {
    console.log(emojiObject);
    setEmoji(emojiObject.emoji);
  };

  const toggleEmojiModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleCalendarModal = () => {
    setCalendarModal(!calendarModal);
  };
  
  const toggleDays = () =>{
    setDays(!days);
  }

  const addFrequency = (dayy: string) => {
    setFrequency((prevFrequency) => {
      if (prevFrequency.includes(dayy)) {
        return prevFrequency.filter((day) => day !== dayy);
      } else {
        return [...prevFrequency, dayy];
      }
    });
  };

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

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Name</Text>
        <CustomInput
          placeholder="Enter category name"
          value={name}
          onChangeText={text => {
            setName(text);
            if (text.trim()) setNameError('');
          }}
        />
        {nameError && <Text style={styles.error}>{nameError}</Text>}

        <Text style={[styles.label, styles.mv]}>Description</Text>
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
              <View
                style={[
                  styles.colorView,
                  {backgroundColor: hexColor ? hexColor : colors.pink},
                ]}></View>
              <Text style={styles.colorTxt}>Color</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.insideInput}>
            <TouchableOpacity style={styles.input} onPress={toggleEmojiModal}>
              <Text style={styles.emojiTxt}>{emoji}</Text>
              <Text style={styles.colorTxt}>Icon</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.frequency}>
           <Text style={styles.label}>Frequency</Text>
           <View style={styles.daysCont}>
             {day.map((item)=>{
              return(
              <TouchableOpacity key={item.id} style={[
                styles.days,
                frequency.includes(item.dayy) && styles.selectedDay, 
              ]} onPress={()=>addFrequency(item.dayy)}>
                 <Text style={styles.dayText}>{item.show}</Text>
              </TouchableOpacity>
             )})}
           </View>
        </View>

        <View style={styles.inCont}>
          <View style={styles.repeatCont}>
            <Text style={styles.inTxt}>Repeat</Text>
            <Switch 
                 onValueChange={toggleDays}
                 value={days}
            />
          </View>
          <View style={styles.separator}></View>
          <View style={[styles.repeatCont, {paddingVertical: vh(15)}]}>
            <Text style={styles.inTxt}>Do it once</Text>
            <TouchableOpacity
              style={styles.tomorrow}
              activeOpacity={0.7}
              onPress={toggleCalendarModal}>
              <Text style={styles.inTxt}>{selected || 'Tomorrow'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.repeatCont, styles.inCont, styles.mt]}>
          <Text style={styles.inTxt}>Goal</Text>
          <Switch />
        </View>

        <TouchableOpacity
          style={[styles.repeatCont, styles.inCont, styles.mt, styles.pdng]}
          activeOpacity={0.7}
          onPress={toggleTimePicker}>
          <Text style={styles.inTxt}>Time range </Text>
          {selectedTime && (<Text style={styles.selectedTime}>{selectedTime}</Text>)}
          <View>
            <Image source={images.down} style={styles.icon} />
          </View>
        </TouchableOpacity>
        {timeError && (<Text style={styles.error}>{timeError}</Text>)}
        <View style={[styles.repeatCont, styles.inCont, styles.mv]}>
          <Text style={styles.inTxt}>Remind me</Text>
          <Switch />
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
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalCont}>
            <View style={styles.modalInsideCont}>
              <ColorPicker value={colors.pink} onComplete={onSelectColor}>
                <Preview />
                <Panel1 />
                <HueSlider />
                <OpacitySlider />
                <Swatches />
              </ColorPicker>
              <TouchableOpacity onPress={toggleModal} style={styles.ok}>
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
        onConfirm={handleConfirm}
        onCancel={toggleTimePicker}
      />

      <Modal visible={calendarModal} animationType="fade" transparent>
        <TouchableWithoutFeedback onPress={toggleCalendarModal}>
          <View style={styles.modalCont}>
            <View style={styles.modalInsideCont}>
              <Calendar
                onDayPress={(day: any) => {
                  setSelected(day.dateString);
                  toggleCalendarModal();
                }}
                markedDates={{
                  [selected]: {
                    selected: true,
                    selectedColor: colors.lightgray,
                    selectedTextColor: '#fff',
                  },
                }}
                minDate={tomorrow}             
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isOpen}
        onClose={toggleEmojiModal}
      />
    </KeyboardAvoidingView>
  );
};

export default AddNewCategory;
