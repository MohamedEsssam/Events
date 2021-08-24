import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import { Color } from "../config/Color";
import AppIcon from "./AppIcon";

export interface Props {
  title: string;
  style?: object;
  color?: string;
  icon?: string;
  onPress: any;
}

const AppButton: React.FC<Props> = ({
  title,
  style,
  color = Color.blue,
  onPress,
  icon,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      {...otherProps}
    >
      <AppText style={[styles.text, { color }]}>{title}</AppText>
      {icon && <AppIcon name={icon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
    paddingRight: 5,
  },
});

export default AppButton;
