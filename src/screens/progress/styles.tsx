import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: vw(20),
    },
    heading: {
      fontSize: vh(25),
      letterSpacing: 1,
      color: colors.text,
      marginBottom: vh(5),
    },
    circleText: {
      fontSize: vh(20),
      color: '#3399FF',
      fontWeight: 'bold',
    },
    btnTxt:{
      fontSize: vh(15),
      letterSpacing: 0.7,
    },
    btnCont:{
      backgroundColor: '#F0F3F5',
      flexDirection: 'row',
      borderRadius: vh(10),
      marginVertical: vh(20),
    },
    btn:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      paddingVertical: vh(8),
      borderRadius: vh(10),
    },
    label:{
      fontSize: vh(16),
      color: colors.text,
      letterSpacing: 0.6,
      fontWeight: '500',
    },
    progressValue:{
      fontWeight: '400',
      fontSize: vh(24),
    },
    progressBar:{
      alignItems:'center',
      justifyContent:'center',
      paddingVertical: vh(30),
    },
    mainCont:{
      justifyContent:'space-between'
    },
    calendar:{
      justifyContent:'center',
      paddingVertical: vh(20),
    }
  });
  export default styles;
  