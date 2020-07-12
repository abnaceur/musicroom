import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { Card, ListItem, Button, Header, Icon } from 'react-native-elements';
import Add from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: '#282830',
  },

  private: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 10,
    flex: 0.3,
  },

  myPrivate: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 10,
    flex: 0.3,
  },

  public: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 10,
    flex: 0.3,
  }
});

const PlayList = ({ navigation }) => {
  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 30; i++) {
      const data = {
        id: i,
        name: i,
        creator: `metentis${i}`,
        public: i % 2 === 0 ? true : false,
        contributors: i % 4 === 0 ? ["metentis2"] : [],
      };
      setPlayList((prevState) => [...prevState, data]);
    }
    // Get playlist already create
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("PlayListEditor")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  const itemView = (name) => (
    <View
      style={{
        width: 100,
        height: 100,
        marginLeft: 10,
        backgroundColor: "blue",
      }}
    >
      <View>
        <Text>{name}</Text>
      </View>
    </View>
  );

  const playListDisplay = (isPublic, privateList) => (

    <FlatList
      data={playList}
      renderItem={({ item }) => {
        if (isPublic && item.public) {
          return itemView(item.name);
        } else if (
          !isPublic &&
          !privateList &&
          item.contributors.find((element) => element === "metentis2")
        ) {
          return itemView(item.name);
        } else if (!isPublic && privateList && item.creator === "metentis2") {
          // Get userName by token
          return itemView(item.name);
        }
      }}
      horizontal={true}
      keyExtractor={(item, index) => index.toString()}
    />
  );

  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#633689"
        centerComponent={{ text: 'PlayList', style: { color: '#fff' } }}
        rightComponent={
          <Add
            onPress={() => navigation.navigate("PlayListEditor")}
            name="add-to-list"
            size={24}
            color="white" />}
      />

      <View style={styles.public}>
        <Text>Public:</Text>
        <View style={{ marginTop: 10 }}>{playListDisplay(true, false)}</View>
      </View>
      <View style={styles.private}>
        <Text>Contributor in private playlist:</Text>
        <View style={{ marginTop: 10 }}>{playListDisplay(false, false)}</View>
      </View>
      <View style={styles.myPrivate}>
        <Text>My private playlist:</Text>
        <View style={{ marginTop: 10 }}>{playListDisplay(false, true)}</View>
      </View>
    </View>
  );
};

export default PlayList;
