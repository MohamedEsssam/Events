import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import * as Location from "expo-location";

import AppText from "./AppText";

export interface Props {}
const AppRadioButton: React.FC<Props> = () => {
  const choices: Array<string> = ["Ongoing", "Joined"];
  const [selected, setSelected] = useState("Ongoing");

  const onSelected = (selected: string): void => {
    setSelected(selected);
  };

  return (
    <View style={styles.container}>
      {choices &&
        choices.map((choice: string) => {
          return (
            <View key={choice}>
              <TouchableOpacity onPress={() => onSelected(choice)}>
                <AppText style={styles.text}>{choice}</AppText>
              </TouchableOpacity>
            </View>
          );
        })}
      <View style={{ flexDirection: "row", top: 54, right: "50%" }}>
        {selected === "Ongoing" ? (
          <View style={styles.onGoing}></View>
        ) : (
          <View style={styles.joined}></View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: "10%",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    paddingLeft: 50,
    top: 5,
  },
  onGoing: {
    width: 70,
    height: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    right: 40,
  },
  joined: {
    width: 70,
    height: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    left: 92,
  },
});

export default AppRadioButton;
