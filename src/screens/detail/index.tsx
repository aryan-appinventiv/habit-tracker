import React, {useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {LineChart, BarChart, ContributionGraph} from 'react-native-chart-kit';
import { getStyles } from './styles';
import {images} from '../../assets/images';
import {vh, Wwidth} from '../../utils/dimensions';
import {RootStackParamList} from '../../navigators';
import {deleteHabitCategory} from '../../utils/firestore/deleteHabitCategory';
import ConfirmationModal from '../../components/confirmationModal';
import { useThemeColors } from '../../utils/themeSelector';

const Detail = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [btn, setBtn] = useState('Week');
  const [graphWidth, setGraphWidth] = useState(1);
  const route = useRoute();
  const {item}: any = route.params;
  const {top} = useSafeAreaInsets();
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const theme = useThemeColors();
  const styles = getStyles(theme);

  const goback = () => {
    Navigation.goBack();
  };

  const handleDelete = () => {
    deleteHabitCategory(item.id, dispatch, Navigation);
  };

  const onClose = () => {
    toggleModal();
  };

  const onConfirm = () => {
    handleDelete();
    toggleModal();
  };

  const toggleModal = () => {
    setVisibleModal(!visibleModal);
  };

  type RepeatCompletedType = { [key: string]: number };
  const contributionsData = Object.entries(item.repeatCompleted as RepeatCompletedType || {}).map(
    ([date, count]) => ({
      date,
      count,
    })
  );

  const monthlyData = new Array(12).fill(0);

  contributionsData.forEach(data => {
    const month = new Date(data.date).getMonth();
    monthlyData[month] += data.count;
  });

  const weeklyData = new Array(7).fill(0);

  contributionsData.forEach(data => {
    const day = new Date(data.date).getDay();
    weeklyData[day === 0 ? 6 : day - 1] += data.count;
  });

  const yearlyData = new Array(7).fill(0);

  contributionsData.forEach(data => {
    const year = new Date(data.date).getFullYear();
    if (year >= 2024 && year <= 2030) {
      yearlyData[year - 2024] += data.count;
    }
  });

  const chartConfig = {
    backgroundColor: 'transparent',
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const copy = [...item.frequency];
  const sortedFrequency = copy.sort((a: number, b: number) => a - b);
  const frequencyText = sortedFrequency
    .map((day: number) => weekDays[day - 1])
    .join(', ');

  const toggleBtn = (current: any) => {
    setBtn(current);
  };

  const zoomIn = () => {
    if (graphWidth < 3) {
      setGraphWidth(graphWidth + 0.5);
    }
  };

  const zoomOut = () => {
    if (graphWidth > 1) {
      setGraphWidth(graphWidth - 0.5);
    }
  };
  console.log("repeatCompleted", item.repeatCompleted);
  console.log(Object.keys(item.repeatCompleted).length);
  return (
    <View style={[styles.container, {paddingTop: top + vh(20)}]}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.headerCont}>
          <TouchableOpacity
            style={styles.headerIconCont}
            activeOpacity={0.7}
            onPress={goback}>
            <Image source={images.close} style={styles.headerIcon} tintColor={theme.tintIconColor} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerIconCont}
            activeOpacity={0.7}
            onPress={toggleModal}>
            <Image source={images.delete} style={styles.headerDelIcon} tintColor={theme.tintIconColor}/>
          </TouchableOpacity>
          <ConfirmationModal
            visible={visibleModal}
            onClose={onClose}
            onConfirm={onConfirm}
            title="Delete"
            desc="Are you sure you want to delete this habit?"
          />
        </View>

        <View style={[styles.imgCont, {backgroundColor: item.clr}]}>
          <Text>{item.icon}</Text>
        </View>
        <Text style={styles.habitName}>{item.name || 'Habit Name'}</Text>
        <View style={styles.txtCont}>
          <Text style={styles.txt}>
            {item.frequency.length === 7 ? 'All days' : frequencyText}
          </Text>
          <View style={styles.bottomLine}></View>
          <Text style={styles.txt}>{item.repeat} times per day</Text>
          <View style={styles.bottomLine}></View>
          <Text style={styles.txt}>{item.selectedTime} hours</Text>
          <View style={styles.bottomLine}></View>
        </View>

        {/* Contribution Graph */}
        <Text style={styles.txt}>Yearly status</Text>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <ScrollView showsHorizontalScrollIndicator={false} bounces={false} horizontal>
            <ContributionGraph
              values={contributionsData}
              endDate={new Date('2025-12-31')}
              numDays={365}
              width={Wwidth * 2.3}
              height={vh(200)}
              chartConfig={chartConfig}
              squareSize={15}
              style={{marginVertical: 8}}
            />
          </ScrollView>
        </View>

        <Text style={styles.btnTxt}>Charts</Text>
        <View style={styles.btnCont}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[btn == 'Week' ? styles.activeBtn : styles.btn]}
            onPress={() => toggleBtn('Week')}>
            <Text style={styles.btnTxt}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[btn == 'Month' ? styles.activeBtn : styles.btn]}
            onPress={() => toggleBtn('Month')}>
            <Text style={styles.btnTxt}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[btn == 'Year' ? styles.activeBtn : styles.btn]}
            onPress={() => toggleBtn('Year')}>
            <Text style={styles.btnTxt}>Year</Text>
          </TouchableOpacity>
        </View>

        {btn == 'Week' && (
          <View style={styles.graphCont}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}>
              <BarChart
                data={{
                  labels: weekDays,
                  datasets: [
                    {
                      data: weeklyData,
                    },
                  ],
                }}
                width={Wwidth * 1}
                height={vh(250)}
                chartConfig={{
                  ...chartConfig,
                  color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
                }}
                style={{
                  marginVertical: 8,
                }}
                withInnerLines={false}
                fromZero={true}
                yAxisLabel=""
                yAxisSuffix=""
              />
            </ScrollView>
          </View>
        )}

        {btn == 'Month' && (
          <View style={styles.graphCont}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}>
              <BarChart
                data={{
                  labels: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                  ],
                  datasets: [
                    {
                      data: monthlyData,
                    },
                  ],
                }}
                width={Wwidth * 1.5}
                height={vh(250)}
                chartConfig={{
                  ...chartConfig,
                  color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
                }}
                style={{
                  marginVertical: 8,
                }}
                withInnerLines={false}
                yAxisLabel=""
                yAxisSuffix=""
              />
            </ScrollView>
          </View>
        )}

        {btn == 'Year' && (
          <View style={styles.graphCont}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}>
              <BarChart
                data={{
                  labels: [
                    '2024',
                    '2025',
                    '2026',
                    '2027',
                    '2028',
                    '2029',
                    '2030',
                  ],
                  datasets: [
                    {
                      data: yearlyData,
                    },
                  ],
                }}
                width={Wwidth * 1.2}
                height={vh(250)}
                chartConfig={{
                  ...chartConfig,
                  color: (opacity = 1) => `rgba(255, 159, 64, ${opacity})`, // Bar color
                }}
                style={{
                  marginVertical: 8,
                }}
                withInnerLines={false}
                fromZero={true}
                yAxisLabel=""
                yAxisSuffix=""
              />
            </ScrollView>
          </View>
        )}

        {/* Line Chart */}
        {Object.keys(item.repeatCompleted).length ? (
          <>
          <View style={styles.lineChartCont}>
          <Text style={styles.txt}>Habit Completion Chart</Text>
          <View style={styles.zoomCont}>
            <TouchableOpacity onPress={zoomOut} style={styles.zoom}>
              <Text>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={zoomIn} style={styles.zoom}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            bounces={false}
            horizontal>
            <LineChart
              data={{
                labels: contributionsData.map(data => data.date),
                datasets: [
                  {
                    data: contributionsData.map(data => data.count),
                  },
                ],
              }}
              width={Wwidth* graphWidth}
              height={vh(250)}
              chartConfig={chartConfig}
              bezier
              style={{marginVertical: 8}}
            />
          </ScrollView>
        </View>
        </>
        ):(<View></View>)}
        
      </ScrollView>
    </View>
  );
};

export default Detail;
