import React, { useState, useEffect, useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  PermissionsAndroid,
  TextInput,
} from "react-native";
import axios from "axios";

import Icon from "react-native-vector-icons/MaterialIcons";

import MapView, { Marker, Circle } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";

const Map = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: 48.819307,
    longitude: 2.2464147,
  });
  const [positionMap, setPositionMap] = useState({
    latitude: 48.819307,
    longitude: 2.2464147,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  const [circle, setCircle] = useState({
    center: {
      latitude: 48.819307,
      longitude: 2.2464147,
    },
    radius: 1000,
  });
  const mapRef = useRef(null);

  useEffect(() => {
    getPermissions();
  }, []);

  const getUserLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLocation = position;
        const {
          coords: { longitude, latitude },
        } = currentLocation;
        setUserLocation({ longitude, latitude });
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const getPermissions = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "ReactNativeCode Location Permission",
        message: "ReactNativeCode App needs access to your location ",
      }
    );
    console.log(granted);
  };

  const setZoom = (increase) => {
    let { latitudeDelta, longitudeDelta } = positionMap;
    const newPositionMap = {
      ...positionMap,
      latitudeDelta: increase ? latitudeDelta / 2 : latitudeDelta * 2,
      longitudeDelta: increase ? longitudeDelta / 2 : longitudeDelta * 2,
    };
    setPositionMap(newPositionMap);
    mapRef.current.animateToRegion(newPositionMap);
  };

  const onRegionChange = (region) => {
    setPositionMap(region);
  };

  const newCoordinate = (e) => {
    const {
      coordinate: { latitude, longitude },
    } = e.nativeEvent;
    setUserLocation({
      latitude,
      longitude,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.iconContainer}>
          <Icon
            onPress={() => getUserLocation()}
            name="my-location"
            size={24}
          />
        </View>
        <View style={styles.iconContainer}>
          <Icon
            onPress={() => console.log("position")}
            name="zoom-in"
            size={24}
            onPress={() => setZoom(true)}
          />
        </View>
        <View style={styles.iconContainer}>
          <Icon
            onPress={() => console.log("position")}
            name="zoom-out"
            onPress={() => setZoom(false)}
            size={24}
          />
        </View>
      </View>
      <MapView
        style={styles.map}
        initialRegion={positionMap}
        onRegionChange={(region) => onRegionChange(region)}
        onPress={(e) => newCoordinate(e)}
        zoomEnabled={false}
        minZoomLevel={5}
        maxZoomLevel={19}
        ref={mapRef}
      >
        <Marker
          coordinate={userLocation}
          title={"title"}
          description={"description"}
          onPress={(e) => newCoordinate(e)}
        />
        <Circle
          center={circle.center}
          radius={circle.radius}
          fillColor="rgba(107, 185, 240, 0.5)"
          strokeColor="rgba(0,0,0,0.5)"
          zIndex={2}
          strokeWidth={2}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: "black",
    zIndex: 10,
    backgroundColor: "white",
    padding: 5,
    marginTop: 5,
    marginRight: 5,
  },
});

export default Map;
