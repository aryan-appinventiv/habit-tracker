import { StyleSheet } from "react-native";
import { vh } from "../../utils/dimensions";

const styles = StyleSheet.create({
    btn:{
        width: '100%',
        alignItems: 'center',
        borderRadius: vh(20),
    },
    btnTxt:{
        letterSpacing: 1.5,
        padding: vh(12),
        fontSize: vh(15),
        fontWeight: '600',
    },
})
export default styles;