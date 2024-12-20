// import {
//   Image,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   Text,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {vh} from '../../utils/dimensions';
// import CustomButton from '../../components/customButton';
// import {images} from '../../assets/images';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../../navigators';
// import {OtpInput} from 'react-native-otp-entry';
// import { colors } from '../../utils/colors';
// import styles from './styles';
// import CustomModal from '../../components/customModal';

// const OTP = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const {top: top} = useSafeAreaInsets();
//   const route = useRoute();
//   const {mobile, confirm}:any = route.params;

//   const Navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   // const Continue = () => {
//   //   if(otp === '1111'){
//   //     setModalVisible(true);
//   //     setTimeout(() => {
//   //       setModalVisible(false)
//   //       Navigation.reset({
//   //         index: 0,
//   //         routes: [{ name: 'Profile' }]
//   //        })
//   //     }, 1000);
//   //   }
//   //   else{
//   //      setError('Please enter correct otp.')
//   //   }
//   // };
//   async function confirmCode() {
//     try {
//       setIsLoading(true);
//       await confirm.confirm(otp);
//       setIsLoading(false);
//       setModalVisible(true);
//       setTimeout(() => {
//         setModalVisible(false)
//         Navigation.reset({
//           index:0,
//           routes:[{name: 'Profile'}]
//         })
//       }, 1000)
//     } catch (error) {
//       setIsLoading(false);
//       console.log("error ", error);
//       setError('Please enter correct otp.')
//   }
// }
//   const goback = () => {
//     Navigation.goBack();
//   };
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       style={[styles.container, {paddingTop: top}]}>
//       <TouchableOpacity
//         style={styles.backCont}
//         activeOpacity={0.7}
//         onPress={goback}>
//         <Image source={images.back} style={styles.back} />
//       </TouchableOpacity>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.mainCont}>
//           <Text style={styles.title}>We just sent you an Email</Text>
//           <View style={styles.labelCont}>
//           <Text style={styles.label}>
//             Enter the security code we sent to
//           </Text>
//           <Text style={styles.mailTxt}> {mobile}</Text>
//           </View>
//           <OtpInput
//             numberOfDigits={6}
//             onTextChange={text => [setOtp(text), setError('')]}
//             focusColor= {colors.gray}
//             type="numeric"
//             theme={{
//                 containerStyle: styles.OTPcontainer,
//                 pinCodeContainerStyle: styles.OTPview,
//               }}
//           />
//           {error? <Text style={styles.error}>{error}</Text> : <View style={{height: vh(50)}}></View>}
//           <CustomButton title="Continue" onPress={confirmCode} disabled={otp.trim().length!==6} />
//           <CustomModal
//           modalVisible={modalVisible}
//           headText="Account Verified!"
//           TextContent="Your account has been verified successfully."
//           Img={images.verify}
//           Imgbg={false}
//         />

//           <View style={styles.alreadyCont}>
//             <Text style={styles.alreadyTxt}>Didn't receive a code?</Text>
//             <TouchableOpacity activeOpacity={0.7}>
//               <Text style={styles.sendAgain}>Send again</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// export default OTP;

import {
  ActivityIndicator,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {vh} from '../../utils/dimensions';
import CustomButton from '../../components/customButton';
import {images} from '../../assets/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';
import {OtpInput} from 'react-native-otp-entry';
import {colors} from '../../utils/colors';
import styles from './styles';
import CustomModal from '../../components/customModal';

const OTP = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {top} = useSafeAreaInsets();
  const route = useRoute();
  const {mobile, confirm}: any = route.params; 

  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  async function confirmCode() {
    try {
      setIsLoading(true);
      await confirm.confirm(otp); 
      setIsLoading(false);
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        Navigation.reset({
          index: 0,
          routes: [{name: 'Profile'}],
        });
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      console.log('error ', error);
      setError('Please enter the correct OTP.');
    }
  }

  const goback = () => {
    Navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.container, {paddingTop: top}]}>
      <TouchableOpacity
        style={styles.backCont}
        activeOpacity={0.7}
        onPress={goback}>
        <Image source={images.back} style={styles.back} />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainCont}>
          <Text style={styles.title}>We just sent you an Email</Text>
          <View style={styles.labelCont}>
            <Text style={styles.label}>Enter the security code we sent to</Text>
            <Text style={styles.mailTxt}> {mobile}</Text>
          </View>
          <OtpInput
            numberOfDigits={6}
            onTextChange={text => [setOtp(text), setError('')]}
            focusColor={colors.gray}
            type="numeric"
            theme={{
              containerStyle: styles.OTPcontainer,
              pinCodeContainerStyle: styles.OTPview,
            }}
          />
          {error ? (
            <Text style={styles.error}>{error}</Text>
          ) : (
            <View style={{height: vh(50)}}></View>
          )}
          {isLoading ? (
            <ActivityIndicator size={'large'} color={colors.btnBackground} />
          ) : (
            <CustomButton
              title="Continue"
              onPress={confirmCode}
              disabled={otp.trim().length !== 6}
            />
          )}
          <CustomModal
            modalVisible={modalVisible}
            headText="Account Verified!"
            TextContent="Your account has been verified successfully."
            Img={images.verify}
            Imgbg={false}
          />
          <View style={styles.alreadyCont}>
            <Text style={styles.alreadyTxt}>Didn't receive a code?</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.sendAgain}>Send again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default OTP;
