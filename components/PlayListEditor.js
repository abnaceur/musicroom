import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import Deezer from "../Deezer";

const buttons = ["Artist", "Albums", "Search"];

const styles = StyleSheet.create({
  container_albums: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  textAlbum: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

const PlayList = ({navigation}) => {
  const [artistList, setArtistList] = useState([]);
  const [albums, setAlbums] = useState([]);
  // const [searchValue, setSearchValue] = useState("");
  const [display, setDisplay] = useState(buttons[0]);
  const [dimensions, setDimensions] = useState(Dimensions.get("window"));

  useEffect(() => {
    const getListArtist = async () => {
      let i = 0;
      let j = i;
      while (i - j < 15) {
        try {
          const response = await Deezer.artist(i);
          if (!response.data.error) {
            setArtistList((prevState) => [...prevState, response.data]);
          } else {
            j++;
          }
          i++;
        } catch (e) {
          console.log(e);
        }
      }
    };
    getListArtist();
  }, []);

  useEffect(() => {
    const getListAlbum = async () => {
      let i = 50000;
      let j = i;
      while (i - j < 15) {
        try {
          const response = await Deezer.album(i);
          if (!response.data.error) {
            setAlbums((prevState) => [...prevState, response.data]);
          } else {
            j++;
          }
          i++;
        } catch (e) {
          console.log(e);
        }
      }
    };
    getListAlbum();
  }, []);

  useEffect(() => {
    // Get if playlist is public or private
  }, []);

  const displayArtistList = () => (
    <FlatList
      data={artistList}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.container_albums}
          onPress={() =>
            navigation.navigate("MusicList", {list: "artist", id: item.id})
          }>
          <View style={{flex: 0.5}}>
            <Image style={{flex: 1}} source={{uri: item.picture_medium}} />
          </View>
          <View style={{flex: 0.5, flexDirection: "row"}}>
            <View>
              <Text>{`Name: ${item.name}`}</Text>
              <Text>{`Nb_akbum: ${item.nb_album}`}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.index}
    />
  );

  const displayAlbumList = () => (
    <FlatList
      data={albums}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.container_albums}
          onPress={() =>
            navigation.navigate("MusicList", {list: "album", id: item.id})
          }>
          <View style={{flex: 0.5}}>
            <Image style={{flex: 1}} source={{uri: item.cover_medium}} />
          </View>
          <View style={{flex: 0.5, flexDirection: "column"}}>
            <View style={styles.textAlbum}>
              <Text>{`Title: ${item.title}`}</Text>
            </View>
            <View style={[styles.textAlbum, {justifyContent: "space-around"}]}>
              <Text>{`Rating: ${item.rating}`}</Text>
              <Text>{`Fans: ${item.fans}`}</Text>
            </View>
            <View style={[styles.textAlbum, {justifyContent: "space-around"}]}>
              <Text>{"Genre"}</Text>
              <Text>{`Date: ${item.release_date}`}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.index}
    />
  );

  // const displaySearch = () => (

  // )

  const displayList = (value) => {
    switch (value) {
      case "Artist":
        return displayArtistList();
      case "Albums":
        return displayAlbumList();

      case "Search":

      default:
        return <View />;
    }
  };

  return (
    <View>
      <View>
        <FlatList
          data={buttons}
          renderItem={({item}) => (
            <View>
              <Button onPress={() => setDisplay(item)} title={item} />
            </View>
          )}
          horizontal={true}
          keyExtractor={(item) => item.item}
        />
      </View>
      <View style={{width: dimensions.width, height: 500, marginTop: 10}}>
        {displayList(display)}
      </View>
    </View>
  );
};

export default PlayList;
