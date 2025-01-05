import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/splash';
import Tutorial from '../screens/tutorial';
import BottomTab from './bottomtab';
import Signup from '../screens/signup';
import OTP from '../screens/otp';
import MoreCategories from '../screens/moreCategories';
import AddNewHabit from '../screens/addNewHabit';
import AddNewCategory from '../screens/addNewCategory';
import Detail from '../screens/detail';
import RegisterWithEmail from '../screens/registerWithEmail';
import Signin from '../screens/signin';
import ForgotPassword from '../screens/forgotPassword';
import Profile from '../screens/profile';
import useFetchCategories from '../hooks';

export type RootStackParamList = {
  Splash: undefined;
  Tutorial: undefined;
  BottomTab: undefined;
  Signup: undefined;
  OTP: { mobile: string };
  MoreCategories: {name: string};
  AddNewHabit: undefined;
  AddNewCategory: undefined;
  Profile: undefined;
  Detail: {name: string};
  RegisterWithEmail: undefined;
  Signin: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
      useFetchCategories();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
      />
      <Stack.Screen
            name="Tutorial"
            component={Tutorial}
            options={{ headerShown: false }}
      />
      <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{ headerShown: false }}
      />
      <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
      />
      <Stack.Screen
            name="OTP"
            component={OTP}
            options={{ headerShown: false }}
      />
      <Stack.Screen
            name="MoreCategories"
            component={MoreCategories}
            options={{headerShown: false }}
      />
      <Stack.Screen
            name="AddNewHabit"
            component={AddNewHabit}
            options={{ headerShown: false }}
      />
      <Stack.Screen
            name="AddNewCategory"
            component={AddNewCategory}
            options={{ headerShown: false }}
      />
      <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
      />
      <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ headerShown: false }}
      />
      <Stack.Screen
            name="RegisterWithEmail"
            component={RegisterWithEmail}
            options={{ headerShown: false }}
      />
      <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
      />
      <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
