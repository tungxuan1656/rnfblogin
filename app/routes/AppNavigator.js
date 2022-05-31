import React from 'react';
import {
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createRef } from 'react';
// import { store } from '../controllers/redux/AppStore'
import AppTabBar from './AppTabBar';
import Example from '../modules/Example/Example';
import Login from '../modules/Login/Login';

const Stack = createNativeStackNavigator();
export const appNavigationRef = createRef();

export default function AppNavigator() {
  return (
    <NavigationContainer ref={appNavigationRef} theme={DefaultTheme}>
      <Stack.Navigator>
        {/* <Stack.Screen name="AppTabBar" component={AppTabBar} /> */}
        <Stack.Screen name="Example" component={Example} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
