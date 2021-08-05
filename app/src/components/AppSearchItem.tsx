import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText";
import AppTextInput from "./AppTextInput";
import AppRadioButton from "./AppRadioButton";

import { Color } from "../config/Color";

export interface Props {}

const AppSearchItem: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", padding: 30, top: "7%" }}>
        <AppText style={{ color: "white", fontSize: 35, fontWeight: "bold" }}>
          Find Event
        </AppText>
        <Image
          source={require("../../assets/resp3.jpeg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <AppTextInput
        placeholder="Search Event"
        iconType="search"
        style={{
          backgroundColor: "#C2D7D0",
          opacity: 0.2,
          marginLeft: 22,
          marginRight: 30,
        }}
      />
      <View style={{ flexDirection: "row" }}>
        <AppRadioButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "35%",
    backgroundColor: Color.blue,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 90,
  },
});

export default AppSearchItem;
