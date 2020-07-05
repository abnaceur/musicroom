import React from "react";
import {View, Button} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import PlayList from "./components/PlayList";
import PlayListEditor from "./components/PlayListEditor";
import MusicList from "./components/MusicList";
import Player from "./components/Player";

const Stack = createStackNavigator();

const Home = ({navigation}) => (
  <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
    <Button
      title="Artist list"
      onPress={() => navigation.navigate("PlayList")}
    />
  </View>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PlayList" component={PlayList} />
      <Stack.Screen name="PlayListEditor" component={PlayListEditor} />
      <Stack.Screen name="MusicList" component={MusicList} />
      <Stack.Screen name="Player" component={Player} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
