import React, { ReactElement } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Color } from "../config/Color";
import AppText from "./AppText";

export interface Props {
  Component: ReactElement;
  title: string;
  style?: any;
  onPress: () => void;
}

const AppTouchBar: React.FC<Props> = ({ Component, title, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.items}>
        {Component}
        <AppText
          style={{
            paddingLeft: 10,
            fontWeight: "bold",
            fontStyle: "italic",
            color: "white",
          }}
        >
          {title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: "95%",
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Color.blue,
    shadowColor: Color.medium,
    shadowOffset: { height: 3, width: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  items: {
    padding: 15,
    flexDirection: "row",
  },
});

export default AppTouchBar;
