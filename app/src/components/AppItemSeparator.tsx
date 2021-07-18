import React from "react";
import { View, StyleSheet } from "react-native";

export interface Props {}

const AppItemSeparator: React.FC<Props> = (props) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    width: "70%",
    height: 1,
    left: "15%",
  },
});

export default AppItemSeparator;
