import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from './../Screens/Screen1';
import Screen2 from './../Screens/Screen2';

const Stack = createStackNavigator();

// ************ Create Stack Navigator *********************

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
