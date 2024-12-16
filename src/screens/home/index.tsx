import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {colors} from '../../utils/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {vh} from '../../utils/dimensions';
import HabbitContainer from '../../components/habitContainer';
import { images } from '../../assets/images';
import styles from './styles';
import CalendarStrip from 'react-native-calendar-strip';

const Home = () => {
  const {top} = useSafeAreaInsets();
  const [selectedTime, setSelectedTime] = useState('All day');

  const setTime=(category: string)=>{
    setSelectedTime(category);
  }

  return (
    <View style={[styles.container, {paddingTop: top + vh(30)}]}>
      <CalendarStrip
        key="calendar-strip"
        style={styles.calendar}
        selectedDate={new Date()}
        onDateSelected={(date) => {
          console.log('Selected Date:', date);
        }}
        dateNumberStyle={styles.dateNumberStyle}
        dateNameStyle={styles.dateNameStyle}
        highlightDateNumberStyle={styles.highlightDateNumberStyle}
        highlightDateNameStyle={styles.dateNameStyle}
        //scrollable={true}
        showMonth={false}
        headerText=''
      />
      <View style={styles.listCont}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={selectedTime=='All day'? [styles.timeCont,{backgroundColor:colors.tabIcon, borderColor: colors.tabIcon}] :styles.timeCont} onPress={()=>setTime('All day')}>
            <Text style={styles.listTxt}>All day</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedTime=='Morning'? [styles.timeCont,{backgroundColor:colors.tabIcon, borderColor: colors.tabIcon}] :styles.timeCont} onPress={()=>setTime('Morning')}>
            <Text style={styles.listTxt}>Morning</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedTime=='Afternoon'? [styles.timeCont,{backgroundColor:colors.tabIcon, borderColor: colors.tabIcon}] :styles.timeCont} onPress={()=>setTime('Afternoon')}>
            <Text style={styles.listTxt}>Afternoon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedTime=='Evening'? [styles.timeCont,{backgroundColor:colors.tabIcon, borderColor: colors.tabIcon}] :styles.timeCont} onPress={()=>setTime('Evening')}>
            <Text style={styles.listTxt}>Evening</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    <ScrollView>
      <View style={styles.label}>
        <Text style={styles.labelTxt}>In progress (2)</Text>
      </View>
      <HabbitContainer title="Reading" top="10" bottom="20" img={images.learning} skipped={false} clr={colors.cat4}/>
      <HabbitContainer title="Yoga" top="1" bottom="2" img={images.sports} skipped={false} clr={colors.cat3}/>
      <View style={styles.label}>
        <Text style={styles.labelTxt}>Done (1)</Text>
      </View>
      <HabbitContainer title="Go for a walk" top="2" bottom="2" img={images.healthy} skipped={false} clr={colors.cat5}/>
      <View style={styles.label}>
        <Text style={styles.labelTxt}>Skipped (1)</Text>
      </View>
      <HabbitContainer title="Drink water" top="2" bottom="2" img={images.healthy} skipped={true} clr={colors.cat1}/>
    </ScrollView>
    </View>
  );
};

export default Home;
