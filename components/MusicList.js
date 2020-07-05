import React, {useState, useEffect} from "react";
import {View, FlatList, Text, TouchableOpacity} from "react-native";
import Deezer from "../Deezer";

const MusicList = ({route, navigation}) => {
  const [musicList, setMusicList] = useState([]);
  const {list, id} = route.params;

  useEffect(() => {
    console.log(list, id);
    const getMusicArtistList = async () => {
      try {
        let response;
        if (list === "artist") {
          response = await Deezer.musicArtistList(id);
        } else {
          response = await Deezer.musicAlbumList(id);
        }
        if (!response.data.error) {
          response.data.data.forEach((music) => {
            setMusicList((prevState) => [...prevState, music]);
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
    getMusicArtistList();
  }, []);

  return (
    <View>
      <FlatList
        data={musicList}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Player", {pathUrl: item.preview})
            }>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.artist.name}</Text>
              <Text>{item.rank}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.index}
      />
    </View>
  );
};

export default MusicList;
