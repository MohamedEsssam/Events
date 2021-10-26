import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";
import { Color } from "../config/Color";

export interface Props {}

const AppScreen: React.FC<Props> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default AppScreen;
