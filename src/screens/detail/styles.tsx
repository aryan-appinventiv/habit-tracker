import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

export const getStyles = (theme:any)=>{
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: vw(20),
    },
    headerCont: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    headerIcon: {
      height: vh(20),
      width: vh(20),
    },
    headerDelIcon: {
      height: vh(27),
      width: vh(27),
    },
    headerIconCont: {
      height: vh(30),
      width: vh(30),
      justifyContent: 'center',
      alignItems: 'center',
    },
    imgCont: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.pink,
      height: vh(60),
      width: vh(60),
      borderRadius: vh(30),
      alignSelf: 'center',
      marginTop: vh(30),
    },
    habitName: {
      fontSize: vh(20),
      letterSpacing: 0.5,
      fontWeight: '500',
      color: theme.text,
      textAlign: 'center',
      marginTop: vh(7),
    },
    bottomLine: {
      height: 1,
      backgroundColor: colors.darkgray,
      marginVertical: vh(10),
    },
    txt: {
      fontSize: vh(16),
      paddingHorizontal: vw(10),
      letterSpacing: 0.2,
      marginTop: vh(10),
      color: theme.text,
    },
    txtCont: {
      marginVertical: vh(30),
    },
    chartCont:{
      marginVertical: vh(20),
    },
    btnTxt:{
        fontSize: vh(15),
        letterSpacing: 0.7,
      },
      btnCont:{
        backgroundColor: '#F0F3F5',
        flexDirection: 'row',
        borderRadius: vh(10),
        marginTop: vh(20),
      },
      btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: vh(8),
        borderRadius: vh(10),
      },
      activeBtn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: vh(8),
        borderRadius: vh(10),
        backgroundColor: '#D6E6F6',
      },
      graphCont: { 
        marginTop: vh(20), 
        alignItems: 'center', 
        justifyContent: 'center',
      },
      lineChartCont: {
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center', 
        marginVertical: vh(15)
      },
      zoomCont: {
        flexDirection:'row', 
        gap: 10
      },
      zoom: {
        backgroundColor:'#D6E6F6', 
        borderRadius: 10,
        width: vh(20),
        height: vh(20),
        alignItems:'center',
        justifyContent:'center',
      },
  })}