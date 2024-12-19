import { Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {vh} from '../../utils/dimensions';
import {Calendar} from 'react-native-calendars';
import CircularProgress from 'react-native-circular-progress-indicator';
import styles from './styles';

const Progress = () => {
  const [selected, setSelected] = useState('');
  const [btn, setBtn] = useState('Summary');
  const {top: top} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: top + vh(30)}]}>
      <Text style={styles.heading}>Progress</Text>
      <View style={styles.btnCont}>
        <TouchableOpacity style={[styles.btn,btn=="Summary" && {backgroundColor:colors.tabIcon}]} onPress={()=>setBtn('Summary')}>
          <Text style={styles.btnTxt}>Summary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn,btn=="Habits" && {backgroundColor:colors.tabIcon}]} onPress={()=>setBtn('Habits')}>
          <Text style={styles.btnTxt}>Habits</Text>
        </TouchableOpacity>
      </View>


    <View style={styles.mainCont}>
      <Text style={styles.label}>Current productivity</Text>
      <View style={styles.progressBar}>
      <CircularProgress 
        value={77} 
        valueSuffix={'%'}
        progressValueColor={colors.text}
        maxValue={100}
        inActiveStrokeColor={colors.background}
        activeStrokeColor={colors.tabIcon}
        radius={vh(60)}
        progressValueStyle={styles.progressValue}
      />
      </View>
      
      <View style={styles.calendar}>
        <Calendar
        style={{
            backgroundColor: 'transparent',
          }}
          
          onDayPress={(day:any) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              selectedColor: colors.lightgray, 
              selectedTextColor: '#fff', 
            },
          }}
        />
      </View>
      </View>  
    </View>
  );
};

export default Progress;
