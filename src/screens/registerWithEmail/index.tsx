import {
    Alert,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import auth from '@react-native-firebase/auth';
  import { images } from '../../assets/images';
  import {colors} from '../../utils/colors';
  import {useNavigation} from '@react-navigation/native';
  import CustomButton from '../../components/customButton';
  import styles from './styles';
  
  const RegisterWithEmail = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({});
  
    const Navigation = useNavigation();
  
    const validateInputs = () => {
      const newErrors = {};
  
      if (!name.trim()) {
        newErrors.name = 'Username cannot be empty';
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.trim()) {
        newErrors.email = 'Email cannot be empty';
      } else if (!emailPattern.test(email)) {
        newErrors.email = 'Please enter a valid email address';
      }
  
      if (!password.trim()) {
        newErrors.password = 'Password cannot be empty';
      } else if (password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }
  
      if (!confirmPassword.trim()) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (confirmPassword !== password) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const onRegister = () => {
      if (!validateInputs()) return;
  
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          const user = auth().currentUser;
          user
            .updateProfile({
              displayName: name,
            })
            .then(() => {
              user
                .sendEmailVerification()
                .then(() => {
                  Alert.alert('Verification email sent. Please check your inbox to verify your email before logging in.');
                })
                .catch(error => {
                  console.error('Error sending verification email:', error);
                });
  
              setName('');
              setEmail('');
              setPassword('');
              setConfirmPassword('');
  
              Navigation.navigate('Signin');
            })
            .catch(error => {
              console.error('Error updating profile:', error);
             Alert.alert('Error updating user profile');
            });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }
  
          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }
          console.error(error);
          Alert.alert('Error during registration');
        });
    };
  
    const goBack = () => {
      Navigation.goBack();
    };
  
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.Container}>
            <ScrollView
              style={styles.secondCont}
              showsVerticalScrollIndicator={false}>
              <Text style={styles.heading}>Create an Account</Text>
  
              <View style={styles.inputBox}>
                <Image source={images.user} style={styles.icon} />
                <TextInput
                  value={name}
                  onChangeText={text => setName(text)}
                  placeholder="Username"
                  autoCapitalize="none"
                  style={styles.textInput}
                  placeholderTextColor={colors.gray}
                />
              </View>
              {errors.name && <Text style={styles.error}>{errors.name}</Text>}
  
              <View style={styles.inputBox}>
                <Image source={images.mail} style={styles.icon} />
                <TextInput
                  value={email}
                  onChangeText={text => setEmail(text)}
                  placeholder="Email Address"
                  autoCapitalize="none"
                  style={styles.textInput}
                  placeholderTextColor={colors.gray}
                />
              </View>
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}
  
              <View style={styles.inputBox}>
                <Image source={images.user} style={styles.icon} />
                <TextInput
                  value={password}
                  onChangeText={text => setPassword(text)}
                  placeholder="Password"
                  autoCapitalize="none"
                  secureTextEntry={!passwordVisible}
                  style={styles.textInput}
                  placeholderTextColor={colors.gray}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}>
                  <Image
                    source={passwordVisible ? images.plus : images.minus}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              {errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
  
              <View style={styles.inputBox}>
                <Image source={images.password} style={styles.icon} />
                <TextInput
                  value={confirmPassword}
                  onChangeText={text => setConfirmPassword(text)}
                  placeholder="Confirm Password"
                  autoCapitalize="none"
                  secureTextEntry={!confirmPasswordVisible}
                  style={styles.textInput}
                  placeholderTextColor={colors.gray}
                />
                <TouchableOpacity
                  onPress={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }>
                  <Image
                    source={confirmPasswordVisible ? images.plus : images.minus}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              {errors.confirmPassword && (
                <Text style={styles.error}>{errors.confirmPassword}</Text>
              )}
  
              <CustomButton onPress={onRegister} title={'Register'} disabled={false}/>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  };
  
  export default RegisterWithEmail;
  
  