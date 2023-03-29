import 'react-native-gesture-handler';
import React from 'react'
import Basic from './screens/Basic'
import Address from './screens/Address';
import Professional from './screens/Professional'
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen name="Basic" component={Basic} />
    <Stack.Screen name="Professional" component={Professional} />
    <Stack.Screen name="Address" component={Address} />
  </Stack.Navigator>
    </NavigationContainer>
    
  );
}
