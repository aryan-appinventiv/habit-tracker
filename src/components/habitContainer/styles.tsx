import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    quantity: {
      backgroundColor: colors.cat4,
      alignSelf: 'flex-start',
      height: vh(30),
      width: vh(30),
      borderRadius: vh(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
    habitCont: {
      flexDirection: 'row',
      backgroundColor: colors.white,
      marginHorizontal: vw(10),
      borderWidth: 1,
      borderColor: colors.lightgray,
      paddingVertical: vh(13),
      paddingHorizontal: vw(5),
      borderRadius: vh(10),
      marginVertical: vh(8),
    },
    innerCont2: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: vw(10),
      alignItems: 'center',
    },
    innerCont1: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: vw(10),
      gap: vw(10),
      alignItems: 'center',
    },
    quantityIcon: {
      width: vh(17),
      height: vh(17),
    },
    habitTxt: {
      fontSize: vh(16),
      letterSpacing: 0.8,
    },
    habitQuantityTxt: {
      fontSize: vh(13),
      color: colors.text,
    },
    habitIcon: {
      //backgroundColor: colors.cat2,
      padding: vh(5),
      height: vh(33),
      width: vh(33),
      borderRadius: vh(20),
    },
  });
  export default styles;