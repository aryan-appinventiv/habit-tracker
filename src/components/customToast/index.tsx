import Toast from "react-native-toast-message";
import { vh } from "../../utils/dimensions";

const CustomToast=(type?: string, title1?: string, title2?: string)=>{
  Toast.show({
    type: type,
    text1: title1,
    text2: title2,
    topOffset: vh(50),
    visibilityTime: 2000,
  })
}

export default CustomToast;    


