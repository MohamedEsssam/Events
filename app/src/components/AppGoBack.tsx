import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AppIcon from "./AppIcon";
import { Color } from "../config/Color";

export interface Props {
  color: string;
  onPress: any;
}

const AppGoBack: React.FC<Props> = ({ color, onPress }) => {
  return (
    <View style={{ position: "absolute", top: 20, zIndex: 1 }}>
      <TouchableOpacity onPress={onPress}>
        <AppIcon
          name="arrow-left"
          size={50}
          backgroundColor="transparent"
          color={color}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppGoBack;
