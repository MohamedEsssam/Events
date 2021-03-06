import React from "react";
import { Platform, Text, StyleSheet } from "react-native";

export interface Props {
  style?: object;
}

const AppText: React.FC<Props> = ({ children, style }) => {
  return (
    <Text style={[styles.text, style]} numberOfLines={5} ellipsizeMode="tail">
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontStyle: "italic",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
  },
});

export default AppText;
