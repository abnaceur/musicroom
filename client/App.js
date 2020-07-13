// In App.js in a new project
<script src="http://localhost:8097" />;
import "react-native-gesture-handler";
// Import context
import { Context as AuthContext } from "./src/context/AuthContext";
import decode from "jwt-decode";

import React, { useContext } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Icon } from 'react-native-elements';
import Home from "react-native-vector-icons/Entypo";
import Event from "react-native-vector-icons/MaterialIcons";
import PlayListMusic from "react-native-vector-icons/MaterialCommunityIcons";

// Import screens
import SigninScreens from "./src/screens/SigninScreen";
import SignupScreens from "./src/screens/SignupScreen";
import HomeScreens from "./src/screens/HomeScreen";
import ResetPwdScreens from "./src/screens/ResetPwdScreen";
import PlayList from "./src/components/PlayList";
import PlayListEditor from "./src/components/PlayListEditor";
import MusicList from "./src/components/MusicList";
import Player from "./src/components/Player";
import AddMusic from "./src/components/AddMusic";
import EventScreen from "./src/screens/EventScreen";
import EventEditor from "./src/components/EventEditor";
import FavorisScreen from "./src/screens/FavorisScreen";
import PlaylistDetailsScreens from './src/screens/PlayListDetails';

// Import helpers
import checkAuth from "./src/helpers/PrivateRoute";
import setNavigator from "./src/helpers/NavigationRef";

// Import context
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as PlayListProvider } from "./src/context/PlayListContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "#F8F8F8",
        style: {
          backgroundColor: "#633689",
        },
        labelStyle: {
          textAlign: "center",
        },
        indicatorStyle: {
          borderBottomColor: "#87B56A",
          borderBottomWidth: 2,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreens}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Home name="home" color="white" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="PlayList"
        component={PlayList}
        options={{
          tabBarLabel: "PlayList",
          tabBarIcon: ({ color, size }) => (
            <PlayListMusic name="playlist-music" color="white" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="EventScreen"
        component={EventScreen}
        options={{
          tabBarLabel: "Events",
          tabBarIcon: ({ color, size }) => (
            <Event name="event" color="white" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const { state } = useContext(AuthContext);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IiQyYiQxMCRYOS9weVNDTnI3S3JhVVQyWC9lbjZPV05JdFdneFVLNjJIdDI1RmVxTEpoZUYyS0RqejNCNiIsImRhdGEiOiI1ZjBiMWVlYjMwOWJhYTAzNTZjN2IyMTAiLCJpYXQiOjE1OTQ2Mzg0NzksImV4cCI6MTU5NDY4MTY3OX0.Xa7tSkKKEQMe9SxX7BxFOmH_Bdvj3x7pfU6RTI7Ms7c";

  if (!token) {
    return (
      <NavigationContainer>
        {/* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#633689' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen name="TabStack" options={{ headerShown: false }} component={TabStack} />
        <Stack.Screen name="AddMusic" component={AddMusic} />
        <Stack.Screen name="PlayListEditor" options={{ headerShown: false }} component={PlayListEditor} />
        <Stack.Screen name="MusicList" component={MusicList} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator> */}
        <Stack.Navigator>
          <Stack.Screen
            initialRouteName="Signin"
            name="Signin"
            options={{ headerShown: false }}
            component={SigninScreens}
          />
          <Stack.Screen
            name="Signup"
            options={{ headerShown: false }}
            component={SignupScreens}
          />
          <Stack.Screen
            name="ResetPwd"
            options={{ headerShown: false }}
            component={ResetPwdScreens}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    try {
      // { exp: 12903819203 }
      const { exp } = decode(token);

      // if (exp < new Date().getTime() / 1000) {
      if (exp) {
        return (
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerStyle: { backgroundColor: "#633689" },
                headerTintColor: "#fff",
                headerTitleStyle: { fontWeight: "bold" },
              }}
            >
              <Stack.Screen
                name="TabStack"
                options={{ headerShown: false }}
                component={TabStack}
              />
              <Stack.Screen
                name="PlaylistDetails"
                options={{ headerShown: false }}
                component={PlaylistDetailsScreens}
              />
              <Stack.Screen
                name="EventEditor"
                options={{ headerShown: false }}
                component={EventEditor}
              />
              <Stack.Screen name="AddMusic" component={AddMusic} />
              <Stack.Screen
                name="PlayListEditor"
                options={{ headerShown: false }}
                component={PlayListEditor}
              />
              <Stack.Screen name="MusicList" component={MusicList} />
              <Stack.Screen name="Player" component={Player} />
            </Stack.Navigator>
          </NavigationContainer>
        );
      } else {
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                initialRouteName="Signin"
                name="Signin"
                options={{ headerShown: false }}
                component={SigninScreens}
              />
              <Stack.Screen
                name="Signup"
                options={{ headerShown: false }}
                component={SignupScreens}
              />
              <Stack.Screen
                name="ResetPwd"
                options={{ headerShown: false }}
                component={ResetPwdScreens}
              />
            </Stack.Navigator>
          </NavigationContainer>
        );
      }
    } catch (e) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              initialRouteName="Signin"
              name="Signin"
              options={{ headerShown: false }}
              component={SigninScreens}
            />
            <Stack.Screen
              name="Signup"
              options={{ headerShown: false }}
              component={SignupScreens}
            />
            <Stack.Screen
              name="ResetPwd"
              options={{ headerShown: false }}
              component={ResetPwdScreens}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
};

export default () => {
  return (
    <AuthProvider>
      <PlayListProvider>
        <App />
      </PlayListProvider>
    </AuthProvider>
  );
};
