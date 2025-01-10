import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw, Wheight } from "../../utils/dimensions";

export const getStyles =(theme:any)=>{
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: vw(20),
    },
    backIcon: {
      height: vh(22),
      width: vh(22),
    },
    backCont: {
      height: vh(30),
      width: vh(30),
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      fontSize: vh(22),
      fontWeight: '500',
      letterSpacing: 0.7,
      color: theme.text,
    },
    headerView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerCont: {
      flex: 1,
      alignItems: 'center',
      paddingRight: vh(30),
    },
    headerContBack: {
      flex: 1,
      alignItems: 'center',
      paddingRight: -vh(30),
    },
    profileImg: {
      height: vh(100),
      width: vh(100),
      borderRadius: vh(50),
      backgroundColor: colors.pink,
      marginVertical: vh(30),
    },
    profileView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    username: {
      fontSize: vh(18),
      fontWeight: '600',
      letterSpacing: 0.5,
      color: theme.text,
    },
    userMail: {
      color: colors.gray,
      fontSize: vh(14),
    },
    form: {
      gap: vh(20),
      marginVertical: vh(25),
    },
    input: {
      backgroundColor: colors.white,
      borderColor: colors.lightgray,
      padding: vh(12),
      borderWidth: 1,
      borderRadius: vh(20),
      paddingHorizontal: vw(15),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    inputTxt: {
      fontSize: vh(14),
      color: colors.gray,
    },
    modalCont: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.2)',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modalInsideCont: {
      //backgroundColor: colors.white,
      paddingBottom: vh(30),
      width: '100%',
      height: Wheight/2.5,
    },
    loadingContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999, 
    },
  });
  
} 