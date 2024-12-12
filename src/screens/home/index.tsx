import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calendar from '../../components/calendar'
import { colors } from '../../utils/colors'


const Home = () => {
  return (
    <View style={styles.container}>
        {/* <Calendar 
          theme={{
            arrowColor: 'white',
            'stylesheet.calendar.header': {
              week: {
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }
            }
          }}
        /> */}
        <Calendar />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        justifyContent:'center', 
        alignItems:'center', 
        flex:1,
        backgroundColor: colors.background,
        marginTop: 100,
    },
})