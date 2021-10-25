import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

type Location = {
  latitude: number;
  longitude: number;
};
export interface Props {
  coordination: Location;
  setCoordination: (location: Location) => void;
}

const AppMap: React.FC<Props> = ({ coordination, setCoordination }) => {
  const [color, setColor] = useState<string>("red");
  const colors: Array<string> = ["red", "blue", "green", "gold"];

  const getRandomColor = () => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  const onLocationChange = ({ nativeEvent }: any) => {
    setCoordination(nativeEvent.coordinate);
    getRandomColor();
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coordination["latitude"],
          longitude: coordination["longitude"],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={onLocationChange}
      >
        <Marker
          draggable
          coordinate={coordination}
          pinColor={color}
          onDrag={onLocationChange}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: 300,
  },
});

export default AppMap;
