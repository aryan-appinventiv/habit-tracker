import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../../utils/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {vh} from '../../utils/dimensions';
import CalendarStrip from 'react-native-calendar-strip';

import {RootState} from '../../redux/store';
import styles from './styles';
import {images} from '../../assets/images';

const Home = () => {
  const {top} = useSafeAreaInsets();
  const [selectedTimeCategory, setSelectedTimeCategory] = useState('All day');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDay, setSelectedDay] = useState<number>();

  const habits = useSelector((state: RootState) => state.categories.habitTypes);

  const setTimeCategory = (category: string) => {
    setSelectedTimeCategory(category);
  };

  const handleDate = (date: any) => {
    let formattedDate = date.format('YYYY-MM-DD');
    setSelectedDate(formattedDate);
    const d = new Date(formattedDate);
    const day = d.getDay();
    setSelectedDay(day === 0 ? 7 : day); 
  };

  const filterHabits = (selectedTimeCategory: string, selectedDay: number) => {
    const filteredByTime = habits.filter(habit => {
      switch (selectedTimeCategory) {
        case 'Morning':
          return parseInt(habit.selectedTime?.split(':')[0], 10) >= 0 && parseInt(habit.selectedTime?.split(':')[0], 10) < 12;
        case 'Afternoon':
          return parseInt(habit.selectedTime?.split(':')[0], 10) >= 12 && parseInt(habit.selectedTime?.split(':')[0], 10) < 16;
        case 'Evening':
          return parseInt(habit.selectedTime?.split(':')[0], 10) >= 16 && parseInt(habit.selectedTime?.split(':')[0], 10) <= 23;
        default:
          return true; 
      }
    });

    const filteredByDay = filteredByTime.filter(habit =>
      habit.frequency?.includes(selectedDay) 
    );

    return filteredByDay;
  };

  const filteredHabits = selectedDay
    ? filterHabits(selectedTimeCategory, selectedDay)
    : [];

  return (
    <View style={[styles.container, {paddingTop: top + vh(30)}]}>
      <CalendarStrip
        key="calendar-strip"
        style={styles.calendar}
        selectedDate={new Date()}
        onDateSelected={date => {
          handleDate(date);
        }}
        dateNumberStyle={styles.dateNumberStyle}
        dateNameStyle={styles.dateNameStyle}
        highlightDateNumberStyle={styles.highlightDateNumberStyle}
        highlightDateNameStyle={styles.dateNameStyle}
        showMonth={false}
        headerText=""
      />

      <View style={styles.listCont}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['All day', 'Morning', 'Afternoon', 'Evening'].map(timeCategory => (
            <TouchableOpacity
              key={timeCategory}
              style={
                selectedTimeCategory === timeCategory
                  ? [
                      styles.timeCont,
                      {
                        backgroundColor: colors.tabIcon,
                        borderColor: colors.tabIcon,
                      },
                    ]
                  : styles.timeCont
              }
              onPress={() => setTimeCategory(timeCategory)}>
              <Text style={styles.listTxt}>{timeCategory}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {filteredHabits.length > 0 ? (
        <View style={styles.habitListContainer}>
          <Text style={styles.labelTxt}>In Progress</Text>
          <ScrollView>
            {filteredHabits.map(habit => (
              <View style={styles.habitCont} key={habit.id}>
                <View style={styles.innerCont1}>
                  <View
                    style={[
                      styles.habitIcon,
                      {backgroundColor: habit.clr},
                    ]}>
                    <Text>{habit.icon}</Text>
                  </View>
                  <Text style={styles.habitTxt}>{habit.name}</Text>
                </View>
                <View style={styles.innerCont2}>
                  <Text style={styles.habitQuantityTxt}>
                    {habit.repeatCompleted}/{habit.repeat}
                  </Text>
                  <TouchableOpacity
                    style={[styles.quantity, {backgroundColor: habit.clr}]}>
                    <Image
                      source={images.minus}
                      style={styles.quantityIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.quantity, {backgroundColor: habit.clr}]}>
                    <Image
                      source={images.plus}
                      style={styles.quantityIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        <Text style={styles.noHabitText}>No habits for this day or time</Text>
      )}
    </View>
  );
};

export default Home;
