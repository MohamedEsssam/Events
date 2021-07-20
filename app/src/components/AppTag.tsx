import React from "react";
import { View, StyleSheet } from "react-native";

import AppIcon from "./AppIcon";
import AppText from "./AppText";

export interface Props {
  title: string;
  iconType?: string;
  style?: object;
  fontSize?: number;
  fontColor?: string;
}

const AppTag: React.FC<Props> = ({
  title,
  iconType = "tags",
  style,
  fontSize = 16,
  fontColor = "#fff",
}) => {
  return (
    <View style={[styles.container, style]}>
      {iconType && <AppIcon name={iconType} size={20} />}
      <AppText style={[styles.text, { fontSize, color: fontColor }]}>
        {title}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    paddingRight: 12,
    marginBottom: 7,
    marginLeft: 7,
    borderRadius: 20,
    alignItems: "center",
    alignSelf: "baseline",
  },
  text: {
    marginLeft: 5,
    fontSize: 2,
  },
});

export default AppTag;
