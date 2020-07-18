import React, { useState, useEffect, useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  PermissionsAndroid,
  TextInput,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import MapView, { Marker, Circle } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";

const locationEvent = "48.862725,2.287592";

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
      latitude: 48.862725,
      longitude: 2.287592,
    },
    radius: 1000,
  });
  const mapRef = useRef(null);

  useEffect(() => {
    getPermissions();
  }, []);

  useEffect(() => {
    const { latitude, longitude } = userLocation;
    const distance = circle.radius / 1000;
    const userPosition = calculDistance(
      latitude,
      longitude,
      circle.center.latitude,
      circle.center.longitude
    );
    console.log(userPosition, distance, " distance");
    if (userPosition < distance) {
      console.log("setPermission");
    } else {
      console.log("notPermission");
    }
  }, [userLocation]);

  const getUserLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const {
          coords: { longitude, latitude },
        } = position;
        setUserLocation({ longitude, latitude });
        setPositionMap({ ...positionMap, longitude, latitude });
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const calculDistance = (lat1, lon1, lat2, lon2) => {
    if (lat1 === lat2 && lon1 === lon2) {
      return 0;
    } else {
      const radLat1 = (Math.PI * lat1) / 180;
      const radLat2 = (Math.PI * lat2) / 180;
      const theta = lon1 - lon2;
      const radTheta = (Math.PI * theta) / 180;
      let distance =
        Math.sin(radLat1) * Math.sin(radLat2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
      if (distance > 1) {
        distance = 1;
      }
      distance = Math.acos(distance);
      distance = (distance * 180) / Math.PI;
      distance = distance * 60 * 1.1515;
      distance = distance * 1.609344;
      return distance;
    }
  };

  const getPermissions = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "ReactNativeCode Location Permission",
        message: "ReactNativeCode App needs access to your location ",
      }
    );
    if (granted) {
      getUserLocation();
    }
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
    const newPositionMap = { ...positionMap, longitude, latitude };
    setUserLocation({
      latitude,
      longitude,
    });
    setPositionMap({ ...positionMap, longitude, latitude });
    mapRef.current.animateToRegion(newPositionMap);
  };

  const centerMap = () => {
    const { latitude, longitude } = userLocation;
    const newPositionMap = { ...positionMap, longitude, latitude };
    setPositionMap({ ...positionMap, longitude, latitude });
    mapRef.current.animateToRegion(newPositionMap);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.iconContainer}>
          <Icon onPress={() => centerMap()} name="my-location" size={24} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="zoom-in" size={24} onPress={() => setZoom(true)} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="zoom-out" onPress={() => setZoom(false)} size={24} />
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
          title={"me"}
          description={"location"}
          onPress={(e) => newCoordinate(e)}
        />
        <Marker
          coordinate={circle.center}
          title={"eventTitle"}
          description={"descriptionEvent"}
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
