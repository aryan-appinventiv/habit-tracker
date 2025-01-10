import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

export const getStyles = (theme:any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    listTxt: {
      fontSize: vh(15),
      letterSpacing: 0.5,
      color: theme.text,
    },
    timeCont: {
      paddingVertical: vh(10),
      paddingHorizontal: vh(15),
      borderRadius: vh(20),
      marginHorizontal: vw(10),
      borderWidth: 1,
      borderColor: colors.gray,
    },
    listCont: {
      marginTop: vh(20),
      marginBottom: vh(20),
    },
    labelTxt: {
      color: colors.gray,
      fontWeight: '500',
      fontSize: vh(14),
    },
    label: {
      paddingHorizontal: vw(10),
      marginVertical: vh(10),
    },
    icon: {
      width: vh(20),
      height: vh(20),
    },



    calendar: {
        height: vh(70),
        paddingHorizontal: vw(5),
      },
      dateNumberStyle: {
        color: theme.text,
        borderRadius: vh(20),
        fontSize: vh(16),
        fontWeight: '500',
        width: vh(35),
        height:vh(35),
        borderWidth: vh(3),
        borderColor: colors.transparent,
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        lineHeight: vh(35), 
      },
      dateNameStyle: {
        color: colors.gray,
        fontSize: vh(16),
      },
      highlightDateNumberStyle: {
        backgroundColor: '#E8EBEE',
        borderWidth: vh(3),
        borderColor: colors.tabIcon,
        borderRadius: vh(20),
        fontSize: vh(16),
        fontWeight: '500',
        width: vh(35),
        height: vh(35),
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        lineHeight: vh(30), 
        color: colors.black,
      },

      habitListContainer: {
        marginTop: 20,
        paddingHorizontal: 15,
      },
      
      habitItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 5,
        backgroundColor: '#f8f8f8',
      },
      
      habitText: {
        fontSize: 16,
        color: '#333',
      },
      
      noHabitText: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        marginVertical: 10,
      },

      quantity: {
        height: vh(30),
        width: vh(30),
        borderRadius: vh(20),
        justifyContent: 'center',
        alignItems: 'center',
      },
      habitCont: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        //marginHorizontal: vw(10),
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
        alignItems:'center',
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
        height: vh(40),
        width: vh(40),
        borderRadius: vh(20),
        justifyContent:'center',
        alignItems:'center',
      },
  });

  
} 