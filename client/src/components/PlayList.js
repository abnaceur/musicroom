import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

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
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 10, flex: 0.3 }}>
        <Text>Public:</Text>
        <View style={{ marginTop: 10 }}>{playListDisplay(true, false)}</View>
      </View>
      <View style={{ marginTop: 10, flex: 0.3 }}>
        <Text>Contributor in private playlist:</Text>
        <View style={{ marginTop: 10 }}>{playListDisplay(false, false)}</View>
      </View>
      <View style={{ marginTop: 10, flex: 0.3 }}>
        <Text>My private playlist:</Text>
        <View style={{ marginTop: 10 }}>{playListDisplay(false, true)}</View>
      </View>
    </View>
  );
};

export default PlayList;
