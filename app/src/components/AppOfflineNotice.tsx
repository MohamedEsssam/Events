import React from "react";
import { View, StyleSheet } from "react-native";
import { Color } from "../config/Color";
import AppText from "./AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

export interface Props {}

const AppOfflineNotice: React.FC<Props> = (props) => {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && !netInfo.isInternetReachable)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection.</AppText>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primary,
    height: 50,
    width: "100%",
    position: "absolute",
    zIndex: 1,
    top: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Color.white,
  },
});

export default AppOfflineNotice;
