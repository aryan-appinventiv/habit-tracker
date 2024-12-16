import { StyleSheet } from "react-native";
import { vh, vw, Wheight, Wwidth } from "../../utils/dimensions";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    img:{
        width: Wwidth/1.7,
        height: Wwidth/1.7,
    },
    heading:{
        fontSize: vh(30),
        letterSpacing: 1.3,
        fontWeight: '500',
        marginTop: vh(30),
    },
    modalHeading:{
        fontSize: vh(23),
        fontWeight: '500',
    },
    modalDesc: {
        fontSize: vh(15),
        marginTop: vh(10),
        letterSpacing: 0.8,
        marginBottom: vh(40),
    },
    modalOutCont: {
        flex:1, 
        justifyContent: 'flex-end'
    },
    modalInCont: {
        height: Wheight/3, 
        backgroundColor: colors.background, 
        paddingHorizontal: vw(20), 
        alignItems:'center',
        justifyContent:'center'
    },
})
export default styles;