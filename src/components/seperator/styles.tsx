import { StyleSheet } from "react-native";
export const getStyles =(theme:any)=>{
    return StyleSheet.create({
        line:{
            height: 3,
            backgroundColor: theme.background,
        }
    })    
} 