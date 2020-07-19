import React, { useState, useContext, useEffect } from "react";
import Icona from "react-native-vector-icons/Entypo";
import Iconb from "react-native-vector-icons/MaterialIcons";
import Iconc from "react-native-vector-icons/MaterialCommunityIcons";
// changer nom icon
import AsyncStorage from "@react-native-community/async-storage";
import { saveUserInfoService } from "../service/UserService";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const ProfileScreen = () => {
  const [user, setUser] = useState({});
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [mood, setMood] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [musicPreferences, setMusicPreferences] = useState("");
  const {
    state: { token },
  } = useContext(AuthContext);

  const fetchUserInfo = async () => {
    try {
      const data = JSON.parse(await AsyncStorage.getItem("userInfo"));
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveUserInfo = async () => {
    console.log("Je suis la");
    let data = {
      status: mood,
      city,
      age,
      musicStyle: musicPreferences,
      firstname,
      lastname,
      email,
    };
    console.log(data);
    saveUserInfoService(data, token);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <Icona name="user" color="white" size={15} />
        <TextInput
          style={styles.inputStyle}
          placeholder="Age"
          value={age}
          onChangeText={(value) => {
            setAge(value);
          }}
        />
      </View>
      <View style={styles.rows}>
        <Icona name="user" color="white" size={15} />
        <TextInput
          style={styles.inputStyle}
          placeholder="First name"
          value={firstname}
          onChangeText={(value) => {
            setFirstName(value);
          }}
        />
      </View>
      <View style={styles.rows}>
        <Icona name="user" color="white" size={15} />
        <TextInput
          style={styles.inputStyle}
          placeholder="Last Name"
          value={lastname}
          onChangeText={(value) => {
            setLastName(value);
          }}
        />
      </View>
      <View style={styles.rows}>
        <Iconb name="place" color="white" size={15} />
        <TextInput
          style={styles.inputStyle}
          placeholder="City"
          value={city}
          onChangeText={(value) => {
            setCity(value);
          }}
        />
      </View>
      <View style={styles.rows}>
        <Iconb name="mood" color="white" size={15} />
        <TextInput
          style={styles.inputStyle}
          placeholder="Mood"
          value={mood}
          onChangeText={(value) => {
            setMood(value);
          }}
        />
      </View>
      <View style={styles.rows}>
        <Icona name="email" color="white" size={15} />
        <TextInput
          style={styles.inputStyle}
          placeholder={user.email}
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
        />
      </View>
      <View style={styles.rows}>
        <Icona name="music" color="white" size={15} />
        <TextInput
          style={styles.inputStyle}
          placeholder="Favorite music style"
          value={musicPreferences}
          onChangeText={(value) => {
            setMusicPreferences(value);
          }}
        />
      </View>
      {/* <View style={styles.rows}>
        <Iconc name="form-textbox-password" color="white" size={15} />
        <TextInput style={styles.inputStyle} placeholder="Password" />
      </View> */}

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => saveUserInfo()}
      >
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282830",
    flexDirection: "column",
    alignItems: "center",
  },
  rows: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: "white",
    marginTop: 30,
    alignItems: "center",
    width: 300,
    height: 40,
  },
  inputStyle: {
    flex: 1,
    backgroundColor: "rgba(255,255,255, 0.8)",
  },
  buttonContainer: {
    backgroundColor: "#27ae60",
    paddingVertical: 10,
    marginTop: 30,
    width: 300,
    height: 40,
    textAlign: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
