import React, {useState, useEffect} from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";

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

const PlayList = ({navigation}) => {
  useEffect(() => {
    // Get playlist already create
  }, []);

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("PlayListEditor")}
        style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayList;
