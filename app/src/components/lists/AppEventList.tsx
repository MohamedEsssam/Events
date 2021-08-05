import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppItemSeparator from "../AppItemSeparator";
import AppListItem from "../AppListItem";

export interface Props {
  items: { title: string; tags: { title: string }[] }[];
}

const AppEventList: React.FC<Props> = ({ items }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={AppItemSeparator}
        renderItem={({ item }) => (
          <AppListItem
            title={item["title"]}
            tags={item["tags"]}
            date=""
            location=""
          />
        )}
        keyExtractor={(item) => item["title"].toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppEventList;
