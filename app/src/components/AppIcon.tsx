import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

export interface Props {
  name: string | any;
  color?: string;
  backgroundColor?: string;
  size?: number;
}

const AppIcon: React.FC<Props> = ({
  color = "#000",
  backgroundColor = "#fff",
  name,
  size = 30,
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor, width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <MaterialCommunityIcons name={name} color={color} size={size / 2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppIcon;
