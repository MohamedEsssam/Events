import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Event from "../../entities/Event";

import AppItemSeparator from "../AppItemSeparator";
import AppListItem from "../AppListItem";

export interface Props {
  items: Array<Event> | undefined;
  onRefresh: Function;
}

const AppEventList: React.FC<Props> = ({ items, onRefresh }) => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={AppItemSeparator}
        renderItem={({ item }) => (
          <AppListItem
            {...item}
            onPress={() => {
              navigation.navigate("EventDetails");
            }}
          />
        )}
        keyExtractor={(item) => item["_id"] as string}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          onRefresh();
          setRefreshing(false);
        }}
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
