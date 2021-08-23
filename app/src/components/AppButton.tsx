import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import { Color } from "../config/Color";

export interface Props {
  title: string;
  style?: object;
  color?: string;
  onPress: any;
}

const AppButton: React.FC<Props> = ({
  title,
  style,
  color = Color.blue,
  onPress,
  ...otherProps
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <AppText style={[styles.text, { color }]}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 25,
    marginTop: 10,
  },
  text: {
    color: Color.white,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default AppButton;
