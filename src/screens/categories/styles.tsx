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
    searchIcon: {
      height: vh(18),
      width: vh(18),
    },
    placeholder: {
      color: colors.gray,
      fontSize: vh(15),
      fontWeight: '500',
      flex: 1,
      letterSpacing: 1,
    },
    input: {
      flexDirection: 'row',
      gap: vw(13),
      borderWidth: 1,
      borderColor: colors.lightgray,
      padding: vh(10),
      borderRadius: vh(20),
      backgroundColor: colors.white,
    },
    itemBtn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: vh(20),
      marginTop: vh(13),
      alignItems: 'center',
      paddingHorizontal: vw(15),
      borderRadius: vh(10),
      backgroundColor: colors.trackcolor_true,
    },
    itemBtnTxt: {
      fontSize: vw(16),
      fontWeight: '400',
      letterSpacing: 1,
      color: colors.black,
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
    },
    buttonCont: {
      marginBottom: vh(50),
      marginTop: vh(20),
    },
  });

  export default styles;
  