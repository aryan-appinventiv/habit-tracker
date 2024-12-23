// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';

// export const SigninWithGoogle = async()=>{
//     try{
//         GoogleSignin.configure({
//             // offlineAccess: false,
//             webClientId: '654611666873-3483vkscn8kj5s4og9ql37n8kc5uf49j.apps.googleusercontent.com',
//             // scopes:['profile', 'email']
//         })
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     console.log("userinfo ",userInfo)
//     const {idToken} = await GoogleSignin.signIn();
//     const googleCredentials = auth.GoogleAuthProvider.credential(idToken);

//     console.log("kya  000 huva ",googleCredentials)
//     auth().signInWithCredential(googleCredentials);

//     return userInfo;
//     } 
//     catch(e){
//         console.log("Google signin error", e);
//         return null;
//     }
// }






import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const onGoogleButtonPress = async()=> {
    // Check if your device supports Google Play
    console.log(onGoogleButtonPress,'pressed');
  try{
        GoogleSignin.configure({
            webClientId: '654611666873-3483vkscn8kj5s4og9ql37n8kc5uf49j.apps.googleusercontent.com',
        })

    const result = await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    console.log("Hello", result);
    // Get the users ID token
    const signInResult = await GoogleSignin.signIn();
    console.log(signInResult,"signInResult")
    if (signInResult) {
     console.log("result", signInResult);
  } else {
      console.log('Failed to fetch profile information.');
  }
    // Try the new style of google-sign in result, from v13+ of that module
    const idToken = signInResult.data?.idToken;
    // const idToken = signInResult.idToken;
    if (!idToken) {
    throw new Error('No ID token found');
    }
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    await auth().signInWithCredential(googleCredential);
  }  catch(err){
    console.log(err,"err")
  }
  }