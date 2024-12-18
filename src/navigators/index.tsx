import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/splash';
import Tutorial from '../screens/tutorial';
import BottomTab from './bottomtab';
import Signup from '../screens/signup';
import OTP from '../screens/otp';
//import Categories from '../screens/categories';
import MoreCategories from '../screens/moreCategories';
import AddNewHabit from '../screens/addNewHabit';
import AddNewCategory from '../screens/addNewCategory';

export type RootStackParamList = {
  Splash: undefined;
  Tutorial: undefined;
  BottomTab: undefined;
  Signup: undefined;
  OTP: { email: string };
  //Categories: undefined;
  MoreCategories: {name: string};
  AddNewHabit: undefined;
  AddNewCategory: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
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
      {/* <Stack.Screen
            name="Categories"
            component={Categories}
            options={{ headerShown: false }}
      /> */}
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

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
