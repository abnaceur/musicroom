import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
} from "react-native";

import CheckBox from '@react-native-community/checkbox';
import Save from 'react-native-vector-icons/Entypo';
import Delete from 'react-native-vector-icons/AntDesign';

import BackWard from 'react-native-vector-icons/Ionicons';

// Import services 
import { savePlayListService } from '../service/playListService';

// Import context
import { Context as playlistReducer } from "../context/PlayListContext";
import { Context as AuthContext } from "../context/AuthContext";

import { Card, ListItem, Header, Icon } from 'react-native-elements';

import Deezer from "../../Deezer";
import { TextInput } from "react-native-gesture-handler";


// TODO Hide invite collaborators if isPrivate = false
// TODO Add for validation to ensure that data is not empty

const PlayListEditor = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [modalOptionsVisible, setModalOptionsVisible] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [titlePlayList, setTitlePlayList] = useState("");
  const [description, setDescription] = useState("");
  const [modalContributorVisible, setModalContributorVisible] = useState(false);
  const [contributor, setContributor] = useState("");
  const [contributors, setContributors] = useState([]);

  const {
    state: { trackList },
    storeTrack,
    deleteTrack,
  } = useContext(playlistReducer);

  const {
    state: { token },
  } = useContext(AuthContext);

  useEffect(() => {
    if (route.params?.music) {
      storeTrack(route.params?.music);
    }
  }, [route.params?.music]);

  // Handl private change
  const handlIsprivate = async (isPrivate) => {
    if (isPrivate === true)
      await setIsPrivate(false)
    else
      await setIsPrivate(true);
  }

  const savePlayList = async (trackList) => {
    let data = {
      titlePlayList,
      description,
      trackList,
      contributors,
      isPrivate
    }

    savePlayListService(data, token);
  };

  const getMusics = async (name) => {
    try {
      const response = await Deezer.searchByArtist(name);
      const { total, data } = response.data;
      if (total > 0) {
        navigation.navigate("MusicList", {
          list: "artist",
          id: data[0].artist.id,
          image: data[0].artist.picture_medium,
          name: data[0].artist.name,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showModal = (title, preview, name) => {
    setTitle(title);
    setPreview(preview);
    setName(name);
    setModalOptionsVisible(true);
  };

  useEffect(() => {
    console.log(contributors);
  }, [contributors]);

  return (
    <View style={{ flex: 1 }}>
      <Header

        backgroundColor="#633689"
        centerComponent={{ text: 'PlayList', style: { color: '#fff' } }}
        leftComponent={
          <BackWard
            onPress={() => navigation.goBack()}
            name="md-arrow-back"
            size={24}
            color="white" />}

        rightComponent={
          // <View style={styles.rightIcons}>
          <Save
            onPress={() => savePlayList(trackList)}
            name="save"
            size={24}
            color="white" />

          //   <Delete
          //     name="delete"
          //     size={24}
          //     color="white" />

          // </View>
        }
      />

      {modalOptionsVisible ? (
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalOptionsVisible}
            onRequestClose={() => Alert.alert("Modal has been closed !")}
          >
            <View style={styles.modalContainer}>
              {/* set width and height with dimensions */}
              <View style={[styles.textContainer, { width: 300, height: 300 }]}>
                <Text
                  onPress={() => {
                    setModalOptionsVisible(false);
                    navigation.navigate("Player", { pathUrl: preview });
                  }}
                  style={styles.textOptions}
                >
                  Play
                </Text>
                <Text
                  onPress={() => {
                    setModalOptionsVisible(false);
                    getMusics(name);
                  }}
                  style={styles.textOptions}
                >
                  Show artist
                </Text>
                <Text
                  onPress={() => {
                    setModalOptionsVisible(false);
                    console.log(title);
                  }}
                  style={styles.textOptions}
                >
                  Show album
                </Text>
                <Text
                  onPress={() => {
                    setModalOptionsVisible(false);
                    deleteTrack(title);
                  }}
                  style={styles.textOptions}
                >
                  Delete
                </Text>
                <TouchableOpacity
                  style={styles.buttonModal}
                  onPress={() => setModalOptionsVisible(false)}
                >
                  <Text style={{ textAlign: "center" }}>Close options</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
      {modalContributorVisible ? (
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalContributorVisible}
            onRequestClose={() => Alert.alert("Modal has been closed !")}
          >
            <View style={styles.modalContainer}>
              <View style={[styles.textContainer, { width: 300, height: 200 }]}>
                {/* set width and height with dimensions */}
                <TextInput
                  onChangeText={(text) => setContributor(text)}
                  value={contributor}
                  style={styles.textInput}
                />
                <View style={{ marginTop: 10 }}>
                  <Button
                    title="Add contributor"
                    onPress={() => {
                      setContributor("");
                      setContributors([...contributors, contributor]);
                      setModalContributorVisible(false);
                    }}
                  />
                </View>
                <View style={{ marginTop: 10 }}>
                  <Button
                    title="Close"
                    onPress={() => setModalContributorVisible(false)}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>Title</Text>
        <TextInput
          onChangeText={(text) => setTitlePlayList(text)}
          value={titlePlayList}
          style={styles.textInput}
        />
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>Description</Text>
        <TextInput
          onChangeText={(text) => setDescription(text)}
          value={description}
          style={styles.textInput}
        />
      </View>
      <View style={{ marginTop: 15, flex: 0.1 }}>
        <Button
          title="Add music"
          color="blue"
          onPress={() => navigation.navigate("AddMusic")}
        />
      </View>
      <View style={{ flex: 0.8, backgroundColor: "red" }}>
        <FlatList
          data={trackList}
          renderItem={({ item }) => {
            const {
              rank,
              title,
              preview,
              artist: { name },
            } = item;
            return (
              <View
                style={{
                  backgroundColor: "blue",
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <View style={[styles.optionsContainer]}>
                  <View style={{ flex: 0.8, alignItems: "center" }}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{
                        paddingLeft: 20,
                      }}
                    >{`Title: ${title} Rank: ${rank}`}</Text>
                  </View>
                  <View style={{ flex: 0.2, alignItems: "center" }}>
                    <TouchableOpacity
                      onPress={() => showModal(title, preview, name)}
                    >
                      <Image
                        style={{ width: 25, height: 25 }}
                        source={require("../../resources/ui_options.jpg")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={{ marginTop: 15, flex: 0.1 }}>
        <Button
          title="Invite user to contribute in my playlist"
          onPress={() => setModalContributorVisible(true)}
          color="blue"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        <CheckBox
          style={{ flex: 0.1 }}
          // disabled={false}
          value={isPrivate}
          onChange={() => handlIsprivate(isPrivate)}
        />

        {/* <CheckBox
          disabled={false}
          value={isPrivate}
          onChange={() => isPrivate ? setIsPrivate(false) : setIsPrivate(true)} */}
        {/* /> */}

        <Text>Set private !</Text>
      </View>
    </View>
  );
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
  },
  textInput: {
    flex: 0.75,
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
  },
  textInputContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  text: {
    marginLeft: 10,
    flex: 0.2,
  },
  rightIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 13
  }
});


export default PlayListEditor;
