import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

export interface Props {
  style?: object;
}

const AppText: React.FC<Props> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
  },
});

export default AppText;
