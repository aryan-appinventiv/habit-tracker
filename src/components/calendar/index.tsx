import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { format, startOfWeek, addDays } from 'date-fns';

const Calendar = () => {
  const [currentWeek, setCurrentWeek] = useState([]);

  useEffect(() => {
    const today = new Date();
    const start = startOfWeek(today, { weekStartsOn: 6 }); // Start week on Monday
    const week = Array.from({ length: 7 }, (_, i) => addDays(start, i));
    setCurrentWeek(week);
  }, []);

  const renderDay = ({ item }) => {
    return (
      <View style={styles.dayContainer}>
        <Text style={styles.dayName}>{format(item, 'EE')}</Text>
        <Text style={styles.dayDate}>{format(item, 'd')}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={currentWeek}
        renderItem={renderDay}
        keyExtractor={(item) => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weekContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FDFCF6',
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  dayName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dayDate: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Calendar;