import React from "react";
import {View, Button} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import PlayList from "./components/PlayList";
import PlayListEditor from "./components/PlayListEditor";
import MusicList from "./components/MusicList";
import Player from "./components/Player";
import AddMusic from "./components/AddMusic";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="PlayList">
      <Stack.Screen name="PlayList" component={PlayList} />
      <Stack.Screen name="AddMusic" component={AddMusic} />
      <Stack.Screen name="PlayListEditor" component={PlayListEditor} />
      <Stack.Screen name="MusicList" component={MusicList} />
      <Stack.Screen name="Player" component={Player} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
