import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { vh } from '../../utils/dimensions';
import { Calendar } from 'react-native-calendars';
import CircularProgress from 'react-native-circular-progress-indicator';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useThemeColors } from '../../utils/themeSelector';
import { getStyles } from './styles';
import moment from 'moment';

const Progress = () => {
  const [selected, setSelected] = useState(moment().format('YYYY-MM-DD'));
  const [btn, setBtn] = useState('Summary');
  const { top: top } = useSafeAreaInsets();

  const habitCategories = useSelector((state: RootState) => state.categories.habitTypes);

  const theme = useThemeColors();
  const styles = getStyles(theme);

  const calculateTotalProgress = () => {
    if (!selected) return 0;
    console.log(selected);

    let totalCompleted = 0;
    habitCategories.forEach((habit: any) => {
      if (habit.repeatCompleted && habit.repeatCompleted[selected]) {
        totalCompleted += habit.repeatCompleted[selected];
      }
    });

    return totalCompleted;
  };

  return (
    <View style={[styles.container, { paddingTop: top + vh(30) }]}>
      <Text style={styles.heading}>Progress</Text>
      <View style={styles.btnCont}>
        <TouchableOpacity
          style={[styles.btn, btn == 'Summary' && { backgroundColor: colors.tabIcon }]}
          onPress={() => setBtn('Summary')}>
          <Text style={styles.btnTxt}>Summary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, btn == 'Habits' && { backgroundColor: colors.tabIcon }]}
          onPress={() => setBtn('Habits')}>
          <Text style={styles.btnTxt}>Habits</Text>
        </TouchableOpacity>
      </View>

      {btn == 'Summary' && (
        <View style={styles.mainCont}>
          <Text style={styles.label}>Current productivity</Text>
          <View style={styles.progressBar}>
            <CircularProgress
              value={calculateTotalProgress()} 
              progressValueColor={theme.text}
              maxValue={100}
              inActiveStrokeColor={theme.background}
              activeStrokeColor={colors.tabIcon}
              radius={vh(60)}
              progressValueStyle={styles.progressValue}
              valueSuffix={'%'}
            />
          </View>

          <View style={styles.calendar}>
            <Calendar
              style={{
                backgroundColor: colors.transparent,
              }}
              onDayPress={(day: any) => {
                setSelected(day.dateString);
              }}
              markedDates={{
                [selected]: {
                  selected: true,
                  selectedColor: colors.lightgray,
                  selectedTextColor: colors.white,
                },
              }}
            />
          </View>
        </View>
      )}

      {btn == 'Habits' && (
        <ScrollView style={styles.list} bounces={false} showsVerticalScrollIndicator={false}>
          {habitCategories.map((item: any) => (
            <TouchableOpacity
              style={[styles.itemBtn, { backgroundColor: item.clr }]}
              activeOpacity={0.7}
              key={item.id}>
              <View style={styles.iconCont}>
                {typeof item.icon === 'string' ? (
                  <Text>{item.icon}</Text>
                ) : (
                  <Image source={item.icon} style={styles.iconImg} />
                )}
                <Text style={styles.itemBtnTxt}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Progress;
