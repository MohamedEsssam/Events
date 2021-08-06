import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import AppTag from "../AppTag";

export interface Props {
  categories: Array<string>;
  style?: object;
  fontSize?: number;
  fontColor?: string;
}

const AppTagsList: React.FC<Props> = ({
  categories,
  style,
  fontColor = "#000",
  fontSize = 9,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View>
            <AppTag
              title={item}
              style={style}
              fontColor={fontColor}
              fontSize={fontSize}
            />
          </View>
        )}
        numColumns={Math.round(categories.length / 2)}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppTagsList;
