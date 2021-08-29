import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from './../Screens/Screen1';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="AuthNav"
        component={AuthNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppNav"
        component={MyDrawer}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}
