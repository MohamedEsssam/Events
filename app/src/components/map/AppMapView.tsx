import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export interface Props {
  coordination: { latitude: number; longitude: number };
}

const AppMapView: React.FC<Props> = ({
  coordination = { latitude: 31.2885, longitude: 30.016 },
}) => {
  return (
    <View style={styles.container}>
      <MapView
        scrollEnabled={false}
        style={styles.map}
        initialRegion={{
          latitude: coordination["latitude"],
          longitude: coordination["longitude"],
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker coordinate={coordination} draggable={false} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: 200,
  },
});

export default AppMapView;
