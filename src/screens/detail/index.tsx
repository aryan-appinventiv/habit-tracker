// import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
// import React, { useState } from 'react';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {vh, Wheight, Wwidth} from '../../utils/dimensions';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../../navigators';
// import {images} from '../../assets/images';
// import {BarChart, ContributionGraph} from 'react-native-chart-kit';
// import styles from './styles';
// import { colors } from '../../utils/colors';
// import { useDispatch } from 'react-redux';
// import { removeCategory } from '../../redux/slices/categories';

// const Detail = () => {
//   const [btn, setBtn] = useState('Week');
//   const route = useRoute();
//   const { item }: any = route.params;
//   const {top} = useSafeAreaInsets();
//   const Navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   const dispatch = useDispatch();
//   const chartConfig = {
//     backgroundGradientFrom: '#fff',
//     backgroundGradientTo: '#fff',
//     decimalPlaces: 0,
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//   };

//   const goback = () => {
//     Navigation.goBack();
//   };

//   const handleDelete = () => {
//     if (item.id) {
//       console.log("Deleting habit with ID:", item.id);
//       dispatch(removeCategory(item.id));
//       Navigation.goBack();
//     }
//   };

//   const weekDays = [
//     'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
//   ];
//    const copy = [...item.frequency];
//    const sortedFrequency = copy.sort((a: number, b: number) => a - b);
//    const frequencyText = sortedFrequency.map((day: number) => weekDays[day - 1]).join(', ');

//   const data = {
//     labels: [
//       '22.07.',
//       '23.07.',
//       '24.07.',
//       '25.07.',
//       '26.07.',
//       '27.07.',
//       '28.07.',
//     ],
//     datasets: [
//       {
//         data: [3000, 3000, 1050, 3000, 0, 0, 0],
//         colors: [
//           (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           (opacity = 0.1) => `rgba(0, 0, 0, ${opacity})`,
//           (opacity = 0.1) => `rgba(0, 0, 0, ${opacity})`,
//           (opacity = 0.1) => `rgba(0, 0, 0, ${opacity})`,
//         ],
//       },
//     ],
//   };

//   const commitsData = [
//     { date: "2017-01-02", count: 1 },
//     { date: "2017-01-03", count: 2 },
//     { date: "2017-01-04", count: 3 },
//     { date: "2017-01-05", count: 4 },
//     { date: "2017-01-06", count: 5 },
//     { date: "2017-01-30", count: 2 },
//     { date: "2017-01-31", count: 3 },
//     { date: "2017-03-01", count: 2 },
//     { date: "2017-04-02", count: 4 },
//     { date: "2017-03-05", count: 2 },
//     { date: "2017-02-30", count: 4 }
//   ];

//   console.log(Object.keys(item))
//   console.log(item.today, item.todayDay, item.todayDate)
//   return (
//     <View style={[styles.container, {paddingTop: top + vh(20)}]}>
//       <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
//         <View style={styles.headerCont}>
//           <TouchableOpacity
//             style={styles.headerIconCont}
//             activeOpacity={0.7}
//             onPress={goback}>
//             <Image source={images.close} style={styles.headerIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.headerIconCont} activeOpacity={0.7} onPress={handleDelete}>
//             <Image source={images.delete} style={styles.headerDelIcon} />
//           </TouchableOpacity>
//         </View>

//         <View style={[styles.imgCont,{backgroundColor:item.clr}]}>
//           <Text>{item.icon}</Text>
//         </View>
//         <Text style={styles.habitName}>{item.name || 'Habit Name'}</Text>
//         <View style={styles.txtCont}>
//           <Text style={styles.txt}>{item.frequency.length==7?'All days': frequencyText}</Text>
//           <View style={styles.bottomLine}></View>
//           <Text style={styles.txt}>{item.repeat} times per day</Text>
//           <View style={styles.bottomLine}></View>
//           <Text style={styles.txt}>{item.selectedTime} hours</Text>
//           <View style={styles.bottomLine}></View>
//         </View>

//         <Text style={styles.txt}>Yearly status</Text>
//         <ScrollView style={styles.chartCont} horizontal>
//           <ContributionGraph
//             values={commitsData}
//             endDate={new Date('2017-04-01')}
//             numDays={105}
//             width={Wwidth}
//             height={Wheight / 4}
//             chartConfig={chartConfig}
//             horizontal
//           />
//         </ScrollView>

//         <Text style={styles.txt}>Charts</Text>
//         <View style={styles.btnCont}>
//           <TouchableOpacity
//             style={[
//               styles.btn,
//               btn == 'Week' && {backgroundColor: colors.tabIcon},
//             ]}
//             onPress={() => setBtn('Week')}>
//             <Text style={styles.btnTxt}>Week</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.btn,
//               btn == 'Month' && {backgroundColor: colors.tabIcon},
//             ]}
//             onPress={() => setBtn('Month')}>
//             <Text style={styles.btnTxt}>Month</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.btn,
//               btn == 'Year' && {backgroundColor: colors.tabIcon},
//             ]}
//             onPress={() => setBtn('Year')}>
//             <Text style={styles.btnTxt}>Year</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.chartCont}>
//           <BarChart
//             data={data}
//             width={Wwidth}
//             height={Wheight / 3}
//             yAxisSuffix=" ml"
//             chartConfig={{
//               backgroundGradientFrom: '#fff',
//               backgroundGradientTo: '#fff',
//               decimalPlaces: 0,
//               color: (opacity = 1) => `rgba(25, 25, 25, ${opacity})`,
//               labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//               propsForBackgroundLines: {
//                 strokeWidth: 0,
//                 color: 'transparent',
//               },
//               propsForVerticalLabels: {
//                 marginTop: 10,
//               },
//             }}
//             fromZero={true}
//             withCustomBarColorFromData={true}
//             flatColor={true}
//             barPercentage={0.3}
//             withInnerLines={false}
//             withVerticalLines={false}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default Detail;

// import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
// import React, { useState } from 'react';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {vh, Wheight, Wwidth} from '../../utils/dimensions';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../../navigators';
// import {images} from '../../assets/images';
// import {BarChart, ContributionGraph} from 'react-native-chart-kit';
// import styles from './styles';
// import { colors } from '../../utils/colors';
// import { useDispatch } from 'react-redux';
// import { removeCategory } from '../../redux/slices/categories';

// const Detail = () => {
//   const [btn, setBtn] = useState('Week');
//   const route = useRoute();
//   const { item }: any = route.params;
//   const {top} = useSafeAreaInsets();
//   const Navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   const dispatch = useDispatch();
//   const chartConfig = {
//     backgroundGradientFrom: '#fff',
//     backgroundGradientTo: '#fff',
//     decimalPlaces: 0,
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//   };

//   const goback = () => {
//     Navigation.goBack();
//   };

//   const handleDelete = () => {
//     if (item.id) {
//       console.log("Deleting habit with ID:", item.id);
//       dispatch(removeCategory(item.id));
//       Navigation.goBack();
//     }
//   };

//   const weekDays = [
//     'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
//   ];
//    const copy = [...item.frequency];
//    const sortedFrequency = copy.sort((a: number, b: number) => a - b);
//    const frequencyText = sortedFrequency.map((day: number) => weekDays[day - 1]).join(', ');

//   const commitsData = [
//     { date: "2017-01-02", count: 1 },
//     { date: "2017-01-03", count: 2 },
//     { date: "2017-01-04", count: 3 },
//     { date: "2017-01-05", count: 4 },
//     { date: "2017-01-06", count: 5 },
//     { date: "2017-01-30", count: 2 },
//     { date: "2017-01-31", count: 3 },
//     { date: "2017-03-01", count: 2 },
//     { date: "2017-04-02", count: 4 },
//     { date: "2017-03-05", count: 2 },
//     { date: "2017-02-30", count: 4 }
//   ];

//   console.log(Object.keys(item))
//   console.log(item.today, item.todayDay, item.todayDate)
//   return (
//     <View style={[styles.container, {paddingTop: top + vh(20)}]}>
//       <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
//         <View style={styles.headerCont}>
//           <TouchableOpacity
//             style={styles.headerIconCont}
//             activeOpacity={0.7}
//             onPress={goback}>
//             <Image source={images.close} style={styles.headerIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.headerIconCont} activeOpacity={0.7} onPress={handleDelete}>
//             <Image source={images.delete} style={styles.headerDelIcon} />
//           </TouchableOpacity>
//         </View>

//         <View style={[styles.imgCont,{backgroundColor:item.clr}]}>
//           <Text>{item.icon}</Text>
//         </View>
//         <Text style={styles.habitName}>{item.name || 'Habit Name'}</Text>
//         <View style={styles.txtCont}>
//           <Text style={styles.txt}>{item.frequency.length==7?'All days': frequencyText}</Text>
//           <View style={styles.bottomLine}></View>
//           <Text style={styles.txt}>{item.repeat} times per day</Text>
//           <View style={styles.bottomLine}></View>
//           <Text style={styles.txt}>{item.selectedTime} hours</Text>
//           <View style={styles.bottomLine}></View>
//         </View>

//         <Text style={styles.txt}>Yearly status</Text>
//         <ScrollView style={styles.chartCont} horizontal>
//           <ContributionGraph
//             values={commitsData}
//             endDate={new Date('2025-12-31')}
//             numDays={105}
//             width={Wwidth}
//             height={Wheight / 4}
//             chartConfig={chartConfig}
//             horizontal
//           />
//         </ScrollView>
//       </ScrollView>
//     </View>
//   );
// };

// export default Detail;

// import React, {useState} from 'react';
// import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {useDispatch} from 'react-redux';
// import {ContributionGraph} from 'react-native-chart-kit';
// import styles from './styles';
// import {colors} from '../../utils/colors';
// import {removeCategory} from '../../redux/slices/categories';
// import {images} from '../../assets/images';
// import {vh, Wheight, Wwidth} from '../../utils/dimensions';
// import {RootStackParamList} from '../../navigators';

// const Detail = () => {
//   const [btn, setBtn] = useState('Week');
//   const route = useRoute();
//   const {item}: any = route.params;
//   const {top} = useSafeAreaInsets();
//   const Navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   const dispatch = useDispatch();

//   const chartConfig = {
//     backgroundGradientFrom: '#fff',
//     backgroundGradientTo: '#fff',
//     decimalPlaces: 0,
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//   };

//   const goback = () => {
//     Navigation.goBack();
//   };

//   const handleDelete = () => {
//     if (item.id) {
//       console.log('Deleting habit with ID:', item.id);
//       dispatch(removeCategory(item.id));
//       Navigation.goBack();
//     }
//   };

//   const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//   const copy = [...item.frequency];
//   const sortedFrequency = copy.sort((a: number, b: number) => a - b);
//   const frequencyText = sortedFrequency
//     .map((day: number) => weekDays[day - 1])
//     .join(', ');

//   const generateYearData = () => {
//     const startDate = new Date('2025-01-01');
//     const data = [];
//     for (let i = 0; i < 365; i++) {
//       const date = new Date(startDate);
//       date.setDate(startDate.getDate() + i);
//       data.push({
//         date: date.toISOString().split('T')[0], 
//         count: Math.floor(Math.random() * 5), 
//       });
//     }
//     return data;
//   };

//   const commitsData = generateYearData();

//   return (
//     <View style={[styles.container, {paddingTop: top + vh(20)}]}>
//       <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
//         <View style={styles.headerCont}>
//           <TouchableOpacity
//             style={styles.headerIconCont}
//             activeOpacity={0.7}
//             onPress={goback}>
//             <Image source={images.close} style={styles.headerIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.headerIconCont}
//             activeOpacity={0.7}
//             onPress={handleDelete}>
//             <Image source={images.delete} style={styles.headerDelIcon} />
//           </TouchableOpacity>
//         </View>

//         <View style={[styles.imgCont, {backgroundColor: item.clr}]}>
//           <Text>{item.icon}</Text>
//         </View>
//         <Text style={styles.habitName}>{item.name || 'Habit Name'}</Text>
//         <View style={styles.txtCont}>
//           <Text style={styles.txt}>
//             {item.frequency.length === 7 ? 'All days' : frequencyText}
//           </Text>
//           <View style={styles.bottomLine}></View>
//           <Text style={styles.txt}>{item.repeat} times per day</Text>
//           <View style={styles.bottomLine}></View>
//           <Text style={styles.txt}>{item.selectedTime} hours</Text>
//           <View style={styles.bottomLine}></View>
//         </View>

//         <Text style={styles.txt}>Yearly status</Text>
//         <ScrollView
//           style={styles.chartCont}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{flexGrow: 1}}>
//           <ContributionGraph
//             values={commitsData}
//             endDate={new Date('2025-12-31')}
//             numDays={365}
//             width={Wwidth * 3} 
//             height={Wheight / 3.5}
//             chartConfig={chartConfig}
//           />
//         </ScrollView>
//       </ScrollView>
//     </View>
//   );
// };

// export default Detail;





import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { ContributionGraph } from 'react-native-chart-kit';
import styles from './styles';
import { images } from '../../assets/images';
import { vh, Wheight, Wwidth } from '../../utils/dimensions';
import { RootStackParamList } from '../../navigators';
import { deleteHabitCategory } from '../../utils/firestore/deleteHabitCategory';
import ConfirmationModal from '../../components/confirmationModal';

const Detail = () => {
  const [btn, setBtn] = useState('Week');
  const [visibleModal, setVisibleModal] = useState(false);
  const route = useRoute();
  const { item }: any = route.params;
  const { top } = useSafeAreaInsets();
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
    deleteHabitCategory(item.id, dispatch, Navigation);
  };
  
  const onClose = () =>{
    toggleModal();
  }

  const onConfirm = ()=>{
    handleDelete();
    toggleModal();
  }

  const toggleModal=()=>{
     setVisibleModal(!visibleModal);
  }
  // const generateYearData = () => {
  //   const startDate = new Date(item.todayDate);
  //   const frequency = item.frequency; // [1 (Monday) to 7 (Sunday)]
  //   const data = [];

  //   for (let i = 0; i < 365; i++) {
  //     const currentDate = new Date(startDate);
  //     currentDate.setDate(startDate.getDate() + i);

  //     // Get the day of the week (1 for Monday, 7 for Sunday)
  //     const dayOfWeek = currentDate.getDay() || 7; // Adjust for Sunday being 0

  //     // Check if the current day is in the frequency array
  //     if (frequency.includes(dayOfWeek)) {
  //       data.push({
  //         date: currentDate.toISOString().split('T')[0], // Format as 'YYYY-MM-DD'
  //         count: Math.floor(Math.random() * 5), // Random activity count
  //       });
  //     }
  //   }
  //   return data;
  // };
  const generateYearData = () => {
    const startDate = new Date(item.todayDate);
    const frequency = item.frequency; // [1 (Monday) to 7 (Sunday)]
    const repeatCompleted = item.repeatCompleted || {}; // Object with date as key and count as value
    const data = [];
  
    for (let i = 0; i < 365; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
  
      const dayOfWeek = currentDate.getDay() || 7; // Adjust for Sunday being 0
  
      if (frequency.includes(dayOfWeek)) {
        const currentDateString = currentDate.toISOString().split('T')[0]; 
        const count = repeatCompleted[currentDateString] || 0; 
        const intensity = count >= item.repeat
          ? 5 
          : count > 0
          ? Math.ceil((count / item.repeat) * 4) 
          : 1; 
  
        data.push({
          date: currentDateString,
          count: intensity,
        });
      }
    }
    return data;
  };
  

  const commitsData = generateYearData();

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const copy = [...item.frequency];
  const sortedFrequency = copy.sort((a: number, b: number) => a - b);
  const frequencyText = sortedFrequency
    .map((day: number) => weekDays[day - 1])
    .join(', ');

 console.log(item.repeatCompleted);  

  return (
    <View style={[styles.container, { paddingTop: top + vh(20) }]}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.headerCont}>
          <TouchableOpacity
            style={styles.headerIconCont}
            activeOpacity={0.7}
            onPress={goback}
          >
            <Image source={images.close} style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerIconCont}
            activeOpacity={0.7}
            onPress={toggleModal}
          >
            <Image source={images.delete} style={styles.headerDelIcon} />
          </TouchableOpacity>
          <ConfirmationModal visible={visibleModal} onClose={onClose} onConfirm={onConfirm} title="Delete" desc="Are you sure you want to delete this habit?"/>
        </View>

        <View style={[styles.imgCont, { backgroundColor: item.clr }]}>
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

        <Text style={styles.txt}>Yearly status</Text>
        <ScrollView
          style={styles.chartCont}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <ContributionGraph
            values={commitsData}
            endDate={new Date('2025-12-31')}
            numDays={365}
            width={Wwidth * 3} 
            height={Wheight / 3.5}
            chartConfig={chartConfig}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Detail;
