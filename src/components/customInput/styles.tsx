import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { vh, vw } from "../../utils/dimensions";

export const getStyles = (theme:any)=>{
  return StyleSheet.create({
    input: {
      backgroundColor: colors.white,
      borderColor: colors.lightgray,
      padding: vh(12),
      borderWidth: 1,
      borderRadius: vh(20),
      fontSize: vh(14),
      color: colors.text,
      paddingHorizontal: vw(15),
    },
  });
} 
  