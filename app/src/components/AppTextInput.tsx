import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import AppIcon from "./AppIcon";

export interface Props {
  iconType?: string;
  iconSize?: number;
  iconColor?: string;
  iconBackgroundColor?: string;
  placeholder: string;
  style?: {};
}

const AppTextInput: React.FC<Props> = ({
  iconType,
  iconSize,
  iconColor,
  iconBackgroundColor,
  placeholder,
  style,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, { ...style }]}>
      <AppIcon
        name={iconType}
        size={iconSize}
        color={iconColor}
        backgroundColor={iconBackgroundColor}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        clearButtonMode="always"
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 25,
    padding: 15,
  },
  input: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginLeft: 10,
    flex: 1,
  },
});

export default AppTextInput;
