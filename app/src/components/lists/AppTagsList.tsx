import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import AppTag from "../AppTag";

export interface Props {
  items: Array<{ title: string }>;
  style?: object;
  fontSize?: number;
  fontColor?: string;
}

const AppTagsList: React.FC<Props> = ({
  items,
  style,
  fontColor = "#000",
  fontSize = 9,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View>
            <AppTag
              title={item["title"]}
              style={style}
              fontColor={fontColor}
              fontSize={fontSize}
            />
          </View>
        )}
        numColumns={Math.round(items.length / 2)}
        keyExtractor={(item) => item["title"].toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppTagsList;
