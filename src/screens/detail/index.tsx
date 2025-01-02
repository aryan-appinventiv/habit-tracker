import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {vh, Wheight, Wwidth} from '../../utils/dimensions';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';
import {images} from '../../assets/images';
import {BarChart, ContributionGraph} from 'react-native-chart-kit';
import {commitsData, data} from '../../constants/list';
import styles from './styles';
import { colors } from '../../utils/colors';
import { useDispatch } from 'react-redux';
import { removeCategory } from '../../redux/slices/categories';

const Detail = () => {
  const [btn, setBtn] = useState('Week');
  const route = useRoute();
  const { name, id }: any = route.params;
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
  console.log("id-->", id)

  const goback = () => {
    Navigation.goBack();
  };

  const handleDelete = () => {
    if (id) {
      console.log("Deleting habit with ID:", id);  // Log the ID being deleted
      dispatch(removeCategory(id));
      Navigation.goBack();
    }
  };

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

        <View style={styles.imgCont}>
          <Text>🕍</Text>
        </View>
        <Text style={styles.habitName}>{name || 'Drink water'}</Text>
        <View style={styles.txtCont}>
          <Text style={styles.txt}>Every day</Text>
          <View style={styles.bottomLine}></View>
          <Text style={styles.txt}>5 glasses per day</Text>
          <View style={styles.bottomLine}></View>
          <Text style={styles.txt}>Any time of the day</Text>
          <View style={styles.bottomLine}></View>
        </View>

        <Text style={styles.txt}>Yearly status</Text>
        <View style={styles.chartCont}>
          <ContributionGraph
            values={commitsData}
            endDate={new Date('2017-04-01')}
            numDays={105}
            width={Wwidth}
            height={Wheight / 4}
            chartConfig={chartConfig}
          />
        </View>

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
