import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: vw(20),
    },
    label: {
      fontSize: vh(20),
      fontWeight: '600',
      letterSpacing: 1,
    },
    title1: {
      fontSize: vh(14),
      fontWeight: '500',
      letterSpacing: 0.5,
      marginVertical: vh(20),
    },
    itemBtn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: vh(20),
      marginBottom: 1,
      alignItems: 'center',
    },
    itemBtnTxt: {
      fontSize: vw(14),
      fontWeight: '400',
    },
    itemImg: {
      height: vw(15),
      width: vw(15),
    },
    iconCont: {
      flexDirection: 'row',
      gap: vw(10),
      alignItems: 'center',
    },
    iconImg: {
      width: vh(18),
      height: vh(18),
    },
    list: {
      backgroundColor: colors.white,
      paddingHorizontal: vw(10),
      borderRadius: vh(15),
    },
    profileImg:{
      height: vh(50),
      width: vh(50),
      backgroundColor:colors.pink,
      padding:vh(5),
      borderRadius: vh(25)
    },
    profileCont:{
      flexDirection:'row',
      backgroundColor: colors.white,
      alignItems:'center',
      padding: vh(10),
      justifyContent: 'space-between',
      marginTop: vh(20),
    },
    name:{
      fontSize: vh(18),
      fontWeight: '500',
      letterSpacing: 0.5,
    },
    email:{
      color: colors.text,
      paddingTop: vh(5),
    },
    nameCont:{
      flexDirection:'row',
      gap: vw(10),
      alignItems:'center',
    }
  });
  export default styles;
  