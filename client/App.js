// In App.js in a new project
<script src="http://localhost:8097"></script>
import 'react-native-gesture-handler';
// Import context
import { Context as AuthContext } from './src/context/AuthContext';


import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import SigninScreens from './src/screens/SigninScreen';
import SignupScreens from './src/screens/SignupScreen';
import HomeScreens from './src/screens/HomeScreen';
import ResetPwdScreens from './src/screens/ResetPwdScreen';

// Import context
import { Provider as AuthProvider } from './src/context/AuthContext';

const Stack = createStackNavigator();

const App = () => {
  const { state } = useContext(AuthContext);

  if (state.token)
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen initialRouteName="Signin" name="Home" options={{ headerShown: false }} component={HomeScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  else return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen initialRouteName="Signin" name="Signin" options={{ headerShown: false }} component={SigninScreens} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreens} />
        <Stack.Screen name="ResetPwd" options={{ headerShown: false }} component={ResetPwdScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>)
}