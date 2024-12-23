import { Platform, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    secondCont: {
      flex: 2,
      paddingTop: vh(30),
      paddingHorizontal: vh(20),
    },
    inputBox: {
      width: '100%',
      borderRadius: vw(5),
      marginVertical: vh(10),
      borderBottomWidth: 1,
      paddingVertical: Platform.OS === 'ios' ? vh(10) : 0,
      paddingHorizontal: vw(10),
      backgroundColor: colors.white,
      borderColor: colors.lightgray,
      flexDirection: 'row',
      alignItems: 'center',
      gap: vw(10),
    },
    heading: {
      color: colors.text,
      fontSize: vw(25),
      fontWeight: '700',
      letterSpacing: 1.8,
      lineHeight: vw(25),
      marginBottom: vh(15),
      paddingHorizontal: vw(10),
    },
    icon: {
      height: vw(20),
      width: vw(20),
    },
    textInput: {
      flex: 1,
      paddingRight: vw(25),
    },
    error: {
      color: colors.red,
      fontSize: vw(12),
      marginBottom: vh(10),
      textAlign: 'left',
    },
  });
  export default styles;
  