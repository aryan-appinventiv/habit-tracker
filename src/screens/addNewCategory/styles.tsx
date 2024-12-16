import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw, Wwidth } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      paddingHorizontal: vw(20),
    },
    headerCont: {
      flexDirection: 'row',
      gap: vw(25),
      alignItems: 'center',
      marginBottom: vh(20),
    },
    closeImg: {
      height: vh(18),
      width: vh(18),
    },
    closeCont: {
      height: vh(30),
      width: vh(30),
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: vh(24),
      fontWeight: '500',
      letterSpacing: 1,
      color: colors.text,
    },
    error: {
      color: 'red',
      marginHorizontal: vw(10),
      marginVertical: vh(10),
    },
    label: {
      fontSize: vh(15),
      marginBottom: vh(8),
      color: colors.text,
      paddingHorizontal: vw(10),
    },
    insideCont: {
      flexDirection: 'row',
      gap: vw(15),
      marginTop: vh(20),
    },
    insideInput: {
      flex: 1,
    },
    input: {
      backgroundColor: colors.white,
      borderColor: colors.lightgray,
      padding: vh(12),
      borderWidth: 1,
      borderRadius: vh(20),
      fontSize: vh(14),
      color: colors.text,
      marginBottom: vh(20),
      paddingHorizontal: vw(15),
      flexDirection: 'row',
      gap: vw(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalCont: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.2)',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modalInsideCont:{
      backgroundColor: colors.white,
      paddingBottom: vh(30),
      width: '100%'
    },
    ok: {
      backgroundColor: colors.black,
      padding: vh(5),
      borderRadius: vh(20),
      marginTop: vh(10),
      alignSelf:'center',
    },
    okTxt: {
      color: colors.background,
      fontSize: vh(18),
      fontWeight: '500',
    },
    colorView: {
      height: vh(22),
      width: vh(22),
      borderRadius: vh(50),
      backgroundColor: colors.pink,
    },
    colorTxt: {
      fontSize: vh(15),
    },
    emojiTxt:{
      fontSize: vh(18),
    },
    icon: {
      height: vh(22),
      width: vh(22),
    },
    repeatCont: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: vh(20),
    },
    inCont: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderRadius: vh(8),
      borderColor: colors.lightgray,
    },
    inTxt: {
      fontSize: vh(15),
      letterSpacing: 0.7,
      color: colors.text,
    },
    separator: {
      height: 1,
      backgroundColor: colors.lightgray,
    },
    tomorrow: {
      backgroundColor: colors.pink,
      paddingVertical: vh(10),
      paddingHorizontal: vh(13),
      borderRadius: vh(20),
    },
    mt: {
      marginTop: vh(20)
    },
    mv:{
      marginVertical: vh(20),
    },
    pdng:{
      paddingVertical: vh(18),
    },
    btn:{
      marginVertical: vh(40),
    },
    selectedTime:{
      backgroundColor: colors.pink,
      padding: vh(7),
      borderRadius: vh(10),
      fontSize: vh(14),
    },
    daysCont:{
      flexDirection:'row',
      flex:1,
      justifyContent: 'space-between',
      marginTop: vh(10),
    },
    days:{
      backgroundColor: colors.white,
      borderRadius: vh(30),
      justifyContent:'center',
      alignItems:'center',
      padding: vh(10),
    },
    dayText:{
      fontSize: vh(18),
    },
    frequency:{
      marginVertical: vh(20),
    },
    selectedDay: {
      backgroundColor: colors.pink, 
    },
  });
  export default styles;