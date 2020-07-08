import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

const forTest = {
  album: {
    cover: "https://api.deezer.com/album/6861104/image",
    cover_big:
      "https://cdns-images.dzcdn.net/images/cover/dcb57e195538467662fbce4492f89c20/500x500-000000-80-0-0.jpg",
    cover_medium:
      "https://cdns-images.dzcdn.net/images/cover/dcb57e195538467662fbce4492f89c20/250x250-000000-80-0-0.jpg",
    cover_small:
      "https://cdns-images.dzcdn.net/images/cover/dcb57e195538467662fbce4492f89c20/56x56-000000-80-0-0.jpg",
    cover_xl:
      "https://cdns-images.dzcdn.net/images/cover/dcb57e195538467662fbce4492f89c20/1000x1000-000000-80-0-0.jpg",
    id: 6861104,
    title: "Combat Rock (Remastered)",
    tracklist: "https://api.deezer.com/album/6861104/tracks",
    type: "album",
  },
  artist: {
    id: 2,
    name: "The Clash",
    tracklist: "https://api.deezer.com/artist/2/top?limit=50",
    type: "artist",
  },
  contributors: [
    {
      id: 2,
      link: "https://www.deezer.com/artist/2",
      name: "The Clash",
      picture: "https://api.deezer.com/artist/2/image",
      picture_big:
        "https://cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/500x500-000000-80-0-0.jpg",
      picture_medium:
        "https://cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/250x250-000000-80-0-0.jpg",
      picture_small:
        "https://cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/56x56-000000-80-0-0.jpg",
      picture_xl:
        "https://cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/1000x1000-000000-80-0-0.jpg",
      radio: true,
      role: "Main",
      share:
        "https://www.deezer.com/artist/2?utm_source=deezer&utm_content=artist-2&utm_term=0_1594072469&utm_medium=web",
      tracklist: "https://api.deezer.com/artist/2/top?limit=50",
      type: "artist",
    },
  ],
  duration: 188,
  explicit_content_cover: 0,
  explicit_content_lyrics: 0,
  explicit_lyrics: false,
  id: 69962764,
  link: "https://www.deezer.com/track/69962764",
  preview:
    "https://cdns-preview-e.dzcdn.net/stream/c-ecc0ed464ac3e078b0b224710f77900a-5.mp3",
  rank: 921309,
  readable: true,
  title: "Should I Stay or Should I Go (Remastered)",
  title_short: "Should I Stay or Should I Go",
  title_version: "(Remastered)",
  type: "track",
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  textOptions: {
    marginTop: 10,
    paddingBottom: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  textContainer: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonModal: {
    marginTop: 10,
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingBottom: 10,
    // justifyContent: "center",
  },
});

const PlayListEditor = ({navigation, route}) => {
  const [musicList, setMusicList] = useState([]);
  const [publicPlayList, setPublicPlayList] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataMusic, setDataMusic] = useState({});

  useEffect(() => {
    // Get music in redux
    if (route.params?.music) {
      // console.log(route.params?.music, " play");
      setMusicList([...musicList, route.params?.music]);
    }
  }, [route.params?.music]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => setPublicPlayList(!publicPlayList)}
          title={publicPlayList ? "Public" : " Private"}
          color="red"
        />
      ),
    });
  }, [publicPlayList]);

  useEffect(() => {
    // getPlayList();
  }, []);

  useEffect(() => {
    // Get if playlist is public or private
  }, []);

  const showModal = () => {
    setDataMusic(forTest);
    setModalVisible(true);
  };

  return (
    <View style={{flex: 1}}>
      {modalVisible ? (
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => Alert.alert("Modal has been closed !")}>
            <View style={styles.modalContainer}>
              {/* set width and height with dimensions */}
              <View style={[styles.textContainer, {width: 300, height: 300}]}>
                <Text
                  onPress={() => console.log(forTest.preview)}
                  style={styles.textOptions}>
                  Play
                </Text>
                <Text
                  onPress={() => console.log(forTest.artist.name)}
                  style={styles.textOptions}>
                  Show artist
                </Text>
                <Text
                  onPress={() => console.log(forTest.album.title)}
                  style={styles.textOptions}>
                  Show album
                </Text>
                <Text
                  onPress={() => console.log("Comment")}
                  style={styles.textOptions}>
                  Comment
                </Text>
                <Text
                  onPress={() => console.log("Delete")}
                  style={styles.textOptions}>
                  Delete
                </Text>
                <TouchableOpacity
                  style={styles.buttonModal}
                  onPress={() => setModalVisible(false)}>
                  <Text style={{textAlign: "center"}}>Close options</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
      <View style={{marginTop: 15, flex: 0.1}}>
        <Button
          title="Add music"
          color="blue"
          onPress={() => navigation.navigate("AddMusic")}
        />
      </View>
      <View style={{flex: 0.8, backgroundColor: "red"}}>
        {/* {musicList.map((music, index) => (
          <View style={{backgroundColor: "blue"}} key={index}>
            <Text>{music.title}</Text>
          </View>
        ))} */}
        <View style={{backgroundColor: "blue", flex: 1, flexDirection: "row"}}>
          <View style={[styles.optionsContainer]}>
            <View style={{flex: 0.8, alignItems: "center"}}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  paddingLeft: 20,
                }}>{`Title: ${forTest.album.title} Rank: ${
                forTest.rank
              }`}</Text>
            </View>
            <View style={{flex: 0.2, alignItems: "center"}}>
              <TouchableOpacity onPress={() => showModal()}>
                <Image
                  style={{width: 25, height: 25}}
                  source={require("../../resources/ui_options.jpg")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 15, flex: 0.1}}>
        <Button
          title="Create playlist"
          onPress={() => setModalVisible(!modalVisible)}
          color="blue"
        />
      </View>
    </View>
  );
};

export default PlayListEditor;
