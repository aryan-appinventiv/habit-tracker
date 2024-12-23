import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw, Wwidth } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      paddingHorizontal: vw(20),
    },
    title: {
      fontSize: vh(24),
      letterSpacing: 1.2,
      fontWeight: '500',
      color: colors.text,
    },
    mainCont: {
      alignItems: 'center',
      flex: 1,
      paddingTop: vh(90),
    },
    label: {
      color: colors.text,
      fontSize: vh(12),
      letterSpacing: 0.6,
      fontWeight: '500',
    },
    alreadyCont: {
      flexDirection: 'row',
      gap: vw(5),
      marginVertical: vh(25),
      justifyContent: 'center',
    },
    alreadyTxt: {
      fontSize: vh(13),
    },
    sendAgain: {
      fontWeight: '500',
      fontSize: vh(13),
    },
    backCont: {
      marginTop: vh(30),
      height: vh(30),
      width: vh(30),
      justifyContent: 'center',
      alignItems: 'center',
    },
    back: {
      height: vh(20),
      width: vh(20),
    },
    OTPcontainer:{
      marginTop: vh(35),
    },
    OTPview:{
      borderRadius: vh(30),
      width: Wwidth*0.14,
      height: Wwidth*0.1,
    },
    error:{
      color: colors.red,
      marginVertical: vh(18),
    },
    labelCont:{
      flexDirection:'row',
      alignItems:'center',
      marginTop: vh(10),
    },
    mailTxt:{
      fontWeight: '600',
    }
  });
  export default styles;
  