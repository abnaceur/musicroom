// In App.js in a new project
<script src="http://localhost:8097"></script>
import 'react-native-gesture-handler';
// Import context
import { Context as AuthContext } from './src/context/AuthContext';
import decode from 'jwt-decode';


import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import SigninScreens from './src/screens/SigninScreen';
import SignupScreens from './src/screens/SignupScreen';
import HomeScreens from './src/screens/HomeScreen';
import ResetPwdScreens from './src/screens/ResetPwdScreen';
import PlayList from "./src/components/PlayList";
import PlayListEditor from "./src/components/PlayListEditor";
import MusicList from "./src/components/MusicList";
import Player from "./src/components/Player";
import AddMusic from "./src/components/AddMusic";

// Import helpers
import checkAuth from './src/helpers/PrivateRoute';
import setNavigator from './src/helpers/NavigationRef';

// Import context
import { Provider as AuthProvider } from './src/context/AuthContext';

const Stack = createStackNavigator();

const App = () => {

  const { state } = useContext(AuthContext);
  const token = state.token;

  if (!token) {
    return <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen initialRouteName="Signin" name="Signin" options={{ headerShown: false }} component={SigninScreens} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreens} />
        <Stack.Screen name="ResetPwd" options={{ headerShown: false }} component={ResetPwdScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  } else {
    try {
      // { exp: 12903819203 }
      const { exp } = decode(token);

      // if (exp < new Date().getTime() / 1000) {
      if (exp) {
        return <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreens} /> */}
            <Stack.Screen initialRouteName="PlayList" name="PlayList" component={PlayList} />
            <Stack.Screen name="AddMusic" component={AddMusic} />
            <Stack.Screen name="PlayListEditor" component={PlayListEditor} />
            <Stack.Screen name="MusicList" component={MusicList} />
            <Stack.Screen name="Player" component={Player} />
          </Stack.Navigator>
        </NavigationContainer>
      } else {
        return <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen initialRouteName="Signin" name="Signin" options={{ headerShown: false }} component={SigninScreens} />
            <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreens} />
            <Stack.Screen name="ResetPwd" options={{ headerShown: false }} component={ResetPwdScreens} />
          </Stack.Navigator>
        </NavigationContainer>
      }

    } catch (e) {
      return <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen initialRouteName="Signin" name="Signin" options={{ headerShown: false }} component={SigninScreens} />
          <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreens} />
          <Stack.Screen name="ResetPwd" options={{ headerShown: false }} component={ResetPwdScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    }
  }



}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>)
}