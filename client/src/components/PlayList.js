import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { Card, ListItem, Button, Header, Icon } from "react-native-elements";
import Add from "react-native-vector-icons/Entypo";

// Import services
import { getAllPlayListService } from "../service/playListService";
import { Context as AuthContext } from "../context/AuthContext";

const PlayList = ({ navigation }) => {
  const [publicPlayList, setPublicPlayList] = useState([]);
  const [myPlayList, setMyPlayList] = useState([]);

  const {
    state: { token },
  } = useContext(AuthContext);

  const fetchPlaylistes = async () => {
    let allPlayList = await getAllPlayListService(token);

    setMyPlayList(allPlayList.myPlaylist);
    setPublicPlayList(allPlayList.publicList);
  };

  useEffect(() => {
    fetchPlaylistes();
  }, []);

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item, index }) => (
    <Card
      // image={{ uri: item.trackList[index].album.cover
      //   item.trackList[index].album.cover : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ytimg.com%2Fvi%2F7pgqf1hQ648%2Fmaxresdefault.jpg&f=1&nofb=1" }}
      image={{
        uri:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ytimg.com%2Fvi%2F7pgqf1hQ648%2Fmaxresdefault.jpg&f=1&nofb=1",
      }}
      containerStyle={{ padding: 0, width: 160, height: 100 }}
    >
      {/* <Text style={{ marginBottom: 10 }}>
        {item.name}
        </Text> */}
    </Card>
  );

  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#633689"
        centerComponent={{ text: "PlayList", style: { color: "#fff" } }}
        rightComponent={
          <Add
            onPress={() => navigation.navigate("PlayListEditor")}
            name="add-to-list"
            size={24}
            color="white"
          />
        }
      />

      <View>
        <Text style={styles.playlistTitle}>Public playlist</Text>
      </View>

      <FlatList
        keyExtractor={keyExtractor}
        data={publicPlayList}
        renderItem={renderItem}
        horizontal={true}
      />

      <View>
        <Text style={styles.myPlaylistTitle}>My playlist</Text>
      </View>

      <FlatList
        keyExtractor={keyExtractor}
        data={myPlayList}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  playlistTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  myPlaylistTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#282830",
  },
});

export default PlayList;
