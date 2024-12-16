import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw, Wheight } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      paddingHorizontal: vw(20),
    },
    title: {
      fontSize: vh(24),
      letterSpacing: 0.8,
      fontWeight: '500',
      color: colors.text,
      textAlign: 'center',
    },
    mainCont: {
      flex: 1,
      justifyContent: 'center',
      paddingVertical: Wheight * 0.2,
    },
    label: {
      color: colors.text,
      fontSize: vh(13),
      letterSpacing: 0.6,
      fontWeight: '400',
      marginTop: vh(30),
      paddingHorizontal: vw(10),
      marginBottom: vh(8),
    },
    input: {
      backgroundColor: colors.white,
      borderColor: colors.lightgray,
      padding: vh(12),
      borderWidth: 1,
      borderRadius: vh(20),
      fontSize: vh(14),
      color: colors.text,
      marginBottom: vh(15),
      paddingHorizontal: vw(15),
    },
    or: {
      color: colors.text,
      marginVertical: vh(20),
      textAlign: 'center',
      fontSize: vh(14),
    },
    logo: {
      width: vh(16),
      height: vh(16),
    },
    logoCont: {
      flexDirection: 'row',
      gap: vw(10),
      borderWidth: 1,
      padding: vh(12),
      borderRadius: vh(20),
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: vh(15),
      borderColor: colors.text,
    },
    logoTxt: {
      fontWeight: '600',
      fontSize: vh(14),
      color: colors.text,
    },
    alreadyCont: {
      flexDirection: 'row',
      gap: vw(5),
      marginVertical: vh(20),
      justifyContent: 'center',
    },
    alreadyTxt: {
      fontSize: vh(13),
    },
    login: {
      fontWeight: '500',
      fontSize: vh(13),
    },
    skip: {
      alignItems: 'flex-end',
      paddingTop: vh(30),
    },
    skipTxt: {
      fontSize: vh(14),
      color: colors.text,
    },
    error:{
      color: 'red',
      marginBottom: vh(15),
    }
  });
  export default styles;
  