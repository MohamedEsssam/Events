import React from "react";
import { View, StyleSheet } from "react-native";

export interface Props {}

const AppImageViewer: React.FC<Props> = (props) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default AppImageViewer;
