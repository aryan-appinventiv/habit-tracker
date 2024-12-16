import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {vh, vw} from '../../utils/dimensions';
import {Calendar} from 'react-native-calendars';
import CircularProgress from 'react-native-circular-progress-indicator';


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
              //disableTouchEvent: true,
             // selectedDotColor: 'orange',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: vw(20),
  },
  heading: {
    fontSize: vh(25),
    letterSpacing: 1,
    color: colors.text,
    marginBottom: vh(5),
  },
  circleText: {
    fontSize: vh(20),
    color: '#3399FF',
    fontWeight: 'bold',
  },
  btnTxt:{
    fontSize: vh(15),
    letterSpacing: 0.7,
  },
  btnCont:{
    backgroundColor: '#F0F3F5',
    flexDirection: 'row',
    borderRadius: vh(10),
    marginVertical: vh(20),
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical: vh(8),
    borderRadius: vh(10),
  },
  label:{
    fontSize: vh(16),
    color: colors.text,
    letterSpacing: 0.6,
    fontWeight: '500',
  },
  progressValue:{
    fontWeight: '400',
    fontSize: vh(24),
  },
  progressBar:{
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: vh(30),
  },
  mainCont:{
    justifyContent:'space-between'
  },
  calendar:{
    justifyContent:'center',
    paddingVertical: vh(20),
  }
});
