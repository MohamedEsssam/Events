import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Event from "../../entities/Event";

import AppItemSeparator from "../AppItemSeparator";
import AppListItem from "../AppListItem";

export interface Props {
  items: Array<Event> | undefined;
}

const AppEventList: React.FC<Props> = ({ items }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={AppItemSeparator}
        renderItem={({ item }) => <AppListItem {...item} />}
        keyExtractor={(item) => item["_id"] as string}
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
