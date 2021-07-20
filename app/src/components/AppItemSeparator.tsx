import React from "react";
import { View, StyleSheet } from "react-native";
import { Color } from "../config/Color";

export interface Props {}

const AppItemSeparator: React.FC<Props> = (props) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.light,
    width: "50%",
    height: 1,
    left: "26%",
  },
});

export default AppItemSeparator;
