import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import SigninScreens from './src/screens/SigninScreen';
import SignupScreens from './src/screens/SignupScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SigninScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
