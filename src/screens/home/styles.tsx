import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    listTxt: {
      fontSize: vh(15),
      letterSpacing: 0.5,
    },
    timeCont: {
      padding: vh(10),
      borderRadius: vh(20),
      marginHorizontal: vw(10),
      borderWidth: 1,
      borderColor: colors.gray,
    },
    listCont: {
      marginTop: vh(20),
      marginBottom: vh(20),
    },
    labelTxt: {
      color: colors.gray,
      fontWeight: '500',
      fontSize: vh(14),
    },
    label: {
      paddingHorizontal: vw(10),
      marginVertical: vh(10),
    },
    icon: {
      width: vh(20),
      height: vh(20),
    },



    calendar: {
        height: vh(70),
        paddingHorizontal: vw(5),
      },
      dateNumberStyle: {
        color: colors.text,
        borderRadius: vh(20),
        fontSize: vh(16),
        fontWeight: '500',
        width: vh(35),
        height:vh(35),
        borderWidth: vh(3),
        borderColor: 'transparent',
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        lineHeight: vh(35), 
      },
      dateNameStyle: {
        color: '#666',
        fontSize: vh(16),
      },
      highlightDateNumberStyle: {
        backgroundColor: '#E8EBEE',
        borderWidth: vh(3),
        borderColor: colors.tabIcon,
        borderRadius: vh(20),
        fontSize: vh(16),
        fontWeight: '500',
        width: vh(35),
        height: vh(35),
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        lineHeight: vh(30), 
      },




  });
  export default styles;
  