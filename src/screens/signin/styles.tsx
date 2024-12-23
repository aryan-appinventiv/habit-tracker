import { Platform, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw, Wheight } from "../../utils/dimensions";

const styles = StyleSheet.create({
    Container: {
        backgroundColor: colors.background,
        flex: 1,
        paddingHorizontal: vw(20),
    },

    secondCont: {
      flex: 2,
      paddingVertical: vh(50),
      paddingHorizontal: vw(20),
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
        fontSize: vh(24),
        letterSpacing: 0.8,
        fontWeight: '500',
        color: colors.text,
        textAlign: 'center',
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
  
    icon: {
      height: vh(20),
      width: vh(20),
    },
    textInput: {
      flex: 1,
      paddingRight: vw(25),
    },
    forgotCont:{
      alignSelf:'flex-end',
    },
    forgotText:{
      fontWeight: '600'
    },
    error:{
      color: colors.red,
      marginBottom: vh(10),
    },
    mainCont: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: Wheight * 0.2,
      },
  });

  export default styles;
  
  







