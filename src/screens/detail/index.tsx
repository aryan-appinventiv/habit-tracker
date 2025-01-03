import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {vh, Wheight, Wwidth} from '../../utils/dimensions';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';
import {images} from '../../assets/images';
import {BarChart, ContributionGraph} from 'react-native-chart-kit';
import styles from './styles';
import { colors } from '../../utils/colors';
import { useDispatch } from 'react-redux';
import { removeCategory } from '../../redux/slices/categories';

const Detail = () => {
  const [btn, setBtn] = useState('Week');
  const route = useRoute();
  const { item }: any = route.params;
  const {top} = useSafeAreaInsets();
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();  
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  const goback = () => {
    Navigation.goBack();
  };

  const handleDelete = () => {
    if (item.id) {
      console.log("Deleting habit with ID:", item.id); 
      dispatch(removeCategory(item.id));
      Navigation.goBack();
    }
  };

  const weekDays = [
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
  ];
   const copy = [...item.frequency];
   const sortedFrequency = copy.sort((a: number, b: number) => a - b);
   const frequencyText = sortedFrequency.map((day: number) => weekDays[day - 1]).join(', ');



  const data = {
    labels: [
      '22.07.',
      '23.07.',
      '24.07.',
      '25.07.',
      '26.07.',
      '27.07.',
      '28.07.',
    ],
    datasets: [
      {
        data: [3000, 3000, 1050, 3000, 0, 0, 0],
        colors: [
          (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          (opacity = 0.1) => `rgba(0, 0, 0, ${opacity})`,
          (opacity = 0.1) => `rgba(0, 0, 0, ${opacity})`,
          (opacity = 0.1) => `rgba(0, 0, 0, ${opacity})`,
        ],
      },
    ],
  };
  
  
  
  const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 }
  ];

  console.log(Object.keys(item))
  console.log(item.tomorrow, item.tomorrowDay)
  return (
    <View style={[styles.container, {paddingTop: top + vh(20)}]}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.headerCont}>
          <TouchableOpacity
            style={styles.headerIconCont}
            activeOpacity={0.7}
            onPress={goback}>
            <Image source={images.close} style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconCont} activeOpacity={0.7} onPress={handleDelete}>
            <Image source={images.delete} style={styles.headerDelIcon} />
          </TouchableOpacity>
        </View>

        <View style={[styles.imgCont,{backgroundColor:item.clr}]}>
          <Text>{item.icon}</Text>
        </View>
        <Text style={styles.habitName}>{item.name || 'Habit Name'}</Text>
        <View style={styles.txtCont}>
          <Text style={styles.txt}>{item.frequency.length==7?'All days': frequencyText}</Text>
          <View style={styles.bottomLine}></View>
          <Text style={styles.txt}>{item.repeat} times per day</Text>
          <View style={styles.bottomLine}></View>
          <Text style={styles.txt}>{item.selectedTime} hours</Text>
          <View style={styles.bottomLine}></View>
        </View>

        <Text style={styles.txt}>Yearly status</Text>
        <ScrollView style={styles.chartCont} horizontal>
          <ContributionGraph
            values={commitsData}
            endDate={new Date('2017-04-01')}
            numDays={105}
            width={Wwidth}
            height={Wheight / 4}
            chartConfig={chartConfig}
            horizontal
          />
        </ScrollView>

        <Text style={styles.txt}>Charts</Text>
        <View style={styles.btnCont}>
          <TouchableOpacity
            style={[
              styles.btn,
              btn == 'Week' && {backgroundColor: colors.tabIcon},
            ]}
            onPress={() => setBtn('Week')}>
            <Text style={styles.btnTxt}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btn,
              btn == 'Month' && {backgroundColor: colors.tabIcon},
            ]}
            onPress={() => setBtn('Month')}>
            <Text style={styles.btnTxt}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btn,
              btn == 'Year' && {backgroundColor: colors.tabIcon},
            ]}
            onPress={() => setBtn('Year')}>
            <Text style={styles.btnTxt}>Year</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chartCont}>
          <BarChart
            data={data}
            width={Wwidth}
            height={Wheight / 3}
            yAxisSuffix=" ml"
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(25, 25, 25, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForBackgroundLines: {
                strokeWidth: 0,
                color: 'transparent',
              },
              propsForVerticalLabels: {
                marginTop: 10,
              },
            }}
            fromZero={true}
            withCustomBarColorFromData={true}
            flatColor={true}
            barPercentage={0.3}
            withInnerLines={false}
            withVerticalLines={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;
