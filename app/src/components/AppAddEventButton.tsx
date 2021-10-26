import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Color } from "../config/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface Props {
  onPress: () => void;
}

const AppAddEventButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={Color.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Color.blue,
    borderColor: Color.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});

export default AppAddEventButton;
