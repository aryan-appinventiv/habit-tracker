import { StyleSheet } from "react-native"
import { vh } from "../../utils/dimensions";

export const getStyles = (theme:any)=>{
    return StyleSheet.create({
    tabBarText: {  
        fontSize: vh(10), 
        marginTop: vh(10), 
        color: theme.text,
    },
    tabBarCont: { 
        marginTop: vh(10), 
        padding: vh(8), 
        borderRadius: vh(25),
    },
    tabBarIcon: { 
        height: vh(20), 
        width: vh(20), 
    },
    addIcon:{
        width: vh(40), 
        height: vh(40)
    },
})}