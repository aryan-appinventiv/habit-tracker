import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      paddingHorizontal: vw(20),
    },
    headerCont: {
      flexDirection: 'row',
      gap: vw(17),
      alignItems: 'center',
    },
    closeImg: {
      height: vh(20),
      width: vh(20),
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
    itemBtn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: vh(10),
      marginTop: vh(13),
      alignItems: 'center',
      paddingHorizontal: vw(15),
      borderRadius: vh(10),
      backgroundColor: colors.white,
    },
    itemBtnTxt: {
      fontSize: vw(16),
      fontWeight: '500',
      letterSpacing: 1,
    },
    itemImg: {
      height: vw(20),
      width: vw(20),
    },
    iconCont: {
      flexDirection: 'row',
      gap: vw(15),
      alignItems: 'center',
    },
    iconImg: {
      width: vh(18),
      height: vh(18),
    },
    list: {
      marginTop: vh(10),
      marginBottom: vh(30),
    },
    textCont: {
      gap: vh(5),
    },
    itemBtnDesc: {
      color: colors.gray,
    },
  });
  export default styles;