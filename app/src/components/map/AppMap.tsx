import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export interface Props {}

const AppMap: React.FC<Props> = (props) => {
  const [coordination, setCoordination] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 31.2885, longitude: 30.016 });
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
          latitude: 31.2885,
          longitude: 30.016,
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default AppMap;
