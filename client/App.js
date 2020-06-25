// In App.js in a new project
import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import SigninScreens from './src/screens/SigninScreen';
import SignupScreens from './src/screens/SignupScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen initialRouteName="Signin" name="Signin" options={{ headerShown: false }} component={SigninScreens} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;