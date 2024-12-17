// import {
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, { useState } from 'react';
// import {colors} from '../../utils/colors';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {vh} from '../../utils/dimensions';

// import styles from './styles';
// import CalendarStrip from 'react-native-calendar-strip';

// const Home = () => {
//   const {top} = useSafeAreaInsets();
//   const [selectedTime, setSelectedTime] = useState('All day');

//   const setTime=(category: string)=>{
//     setSelectedTime(category);
//   }

//   return (
//     <View style={[styles.container, {paddingTop: top + vh(30)}]}>
//       <CalendarStrip
//         key="calendar-strip"
//         style={styles.calendar}
//         selectedDate={new Date()}
//         onDateSelected={(date) => {
//           console.log('Selected Date:', date);
//         }}
//         dateNumberStyle={styles.dateNumberStyle}
//         dateNameStyle={styles.dateNameStyle}
//         highlightDateNumberStyle={styles.highlightDateNumberStyle}
//         highlightDateNameStyle={styles.dateNameStyle}
//         //scrollable={true}
//         showMonth={true}
//         headerText=''
//       />
//       <View style={styles.listCont}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <TouchableOpacity style={selectedTime=='All day'? [styles.timeCont,{backgroundColor:colors.tabIcon, borderColor: colors.tabIcon}] :styles.timeCont} onPress={()=>setTime('All day')}>
//             <Text style={styles.listTxt}>All day</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={selectedTime=='Morning'? [styles.timeCont,{backgroundColor:colors.tabIcon, borderColor: colors.tabIcon}] :styles.timeCont} onPress={()=>setTime('Morning')}>
//             <Text style={styles.listTxt}>Morning</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={selectedTime=='Afternoon'? [styles.timeCont,{backgroundColor:colors.tabIcon, borderColor: colors.tabIcon}] :styles.timeCont} onPress={()=>setTime('Afternoon')}>
//             <Text style={styles.listTxt}>Afternoon</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={selectedTime=='Evening'? [styles.timeCont,{backgroundColor:colors.tabIcon, borderColor: colors.tabIcon}] :styles.timeCont} onPress={()=>setTime('Evening')}>
//             <Text style={styles.listTxt}>Evening</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
   
//     </View>
//   );
// };

// export default Home;





import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { colors } from '../../utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { vh } from '../../utils/dimensions';
import CalendarStrip from 'react-native-calendar-strip';

import { RootState } from '../../redux/store';
import styles from './styles';

const Home = () => {
  const { top } = useSafeAreaInsets();
  const [selectedTime, setSelectedTime] = useState('All day');

  const habits = useSelector((state: RootState) => state.categories.habitTypes);

  const setTime = (category: string) => {
    setSelectedTime(category);
  };

  return (
    <View style={[styles.container, { paddingTop: top + vh(30) }]}>
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
        showMonth={true}
        headerText=""
      />

      <View style={styles.listCont}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['All day', 'Morning', 'Afternoon', 'Evening'].map((time) => (
            <TouchableOpacity
              key={time}
              style={
                selectedTime === time
                  ? [styles.timeCont, { backgroundColor: colors.tabIcon, borderColor: colors.tabIcon }]
                  : styles.timeCont
              }
              onPress={() => setTime(time)}
            >
              <Text style={styles.listTxt}>{time}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.habitListContainer}>
        <Text style={styles.label}>Your Habits:</Text>
        {habits.length > 0 ? (
          <ScrollView>
            {habits.map((habit) => (
              <View key={habit.id} style={styles.habitItem}>
                <Text style={styles.habitText}>{habit.name}</Text>
              </View>
            ))}
          </ScrollView>
        ) : (
          <Text style={styles.noHabitText}>No habits available</Text>
        )}
      </View>
    </View>
  );
};

export default Home;

