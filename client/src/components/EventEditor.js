import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import DatetimePicker from "@react-native-community/datetimepicker";
import { Header } from "react-native-elements";

import Save from "react-native-vector-icons/Entypo";
import BackWard from "react-native-vector-icons/Ionicons";

const EventEditor = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [startEvent, setStartEvent] = useState(false);
  const [endEvent, setEndEvent] = useState(false);

  const onChangeStart = (e, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setStartEvent(Platform.OS === "ios");
    setStartDate(currentDate);
    currentDate > endDate && setEndDate(currentDate);
  };

  const onChangeEnd = (e, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setEndEvent(Platform.OS === "ios");
    currentDate > startDate && setEndDate(currentDate);
  };

  const showMode = (currentMode, setEvent) => {
    setEvent(true);
    setMode(currentMode);
  };

  const formatDate = (date) => {
    const seconds = new Date(date);
    const dateStr =
      ("00" + seconds.getDate()).slice(-2) +
      "/" +
      ("00" + (seconds.getMonth() + 1)).slice(-2) +
      "/" +
      seconds.getFullYear();
    return dateStr;
  };

  const formatHour = (date) => {
    const seconds = new Date(date);
    const dateStr =
      ("00" + seconds.getHours()).slice(-2) +
      ":" +
      ("00" + seconds.getMinutes()).slice(-2) +
      ":" +
      ("00" + seconds.getSeconds()).slice(-2);
    return dateStr;
  };

  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#633689"
        centerComponent={{ text: "Event", style: { color: "#fff" } }}
        leftComponent={
          <BackWard
            onPress={() => navigation.goBack()}
            name="md-arrow-back"
            size={24}
            color="white"
          />
        }
        rightComponent={
          <Save
            onPress={() => console.log("Save event")}
            name="save"
            size={24}
            color="white"
          />
        }
      />
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>Title</Text>
        <TextInput
          onChangeText={(text) => setTitle(text)}
          value={title}
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
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 15,
          }}
        >
          <View>
            <TouchableOpacity
              style={styles.buttonDate}
              onPress={() => showMode("date", setStartEvent)}
            >
              <Text style={styles.textDate}>{`Start date: ${formatDate(
                startDate
              )}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonDate}
              onPress={() => showMode("time", setStartEvent)}
            >
              <Text style={styles.textDate}>{`Start hour: ${formatHour(
                startDate
              )}`}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonDate}
              onPress={() => showMode("date", setEndEvent)}
            >
              <Text style={styles.textDate}>{`End date: ${formatDate(
                endDate
              )}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonDate}
              onPress={() => showMode("time", setEndEvent)}
            >
              <Text style={styles.textDate}>{`End hour: ${formatHour(
                endDate
              )}`}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {startEvent && (
          <DatetimePicker
            testID="dateTimePicker"
            value={startDate}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChangeStart}
          />
        )}
        {endEvent && (
          <DatetimePicker
            testID="dateTimePicker"
            value={endDate}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChangeEnd}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282830",
  },
  textInput: {
    flex: 0.75,
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    marginLeft: 10,
    flex: 0.2,
    color: "white",
  },
  buttonDate: {
    elevation: 8,
    backgroundColor: "#841584",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 150,
    marginBottom: 10,
  },
  textDate: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default EventEditor;
