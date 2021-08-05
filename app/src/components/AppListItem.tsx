import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

import AppTag from "./AppTag";
import AppText from "./AppText";
import AppTagsList from "./lists/AppTagsList";
import { Color } from "../config/Color";

export interface Props {
  title: string;
  tags: { title: string }[];
  location: string;
  date: string;
}

const AppListItem: React.FC<Props> = ({ title, tags, location, date }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.item}>
          <AppText
            style={{ fontSize: 30, fontStyle: "italic", fontWeight: "bold" }}
          >
            {title}
          </AppText>
          <AppTagsList items={tags} style={{ backgroundColor: "#3EB489" }} />
          <AppTag
            iconType="location-arrow"
            title="1-3 miami,Alexandria"
            style={{ backgroundColor: "#246EE9" }}
          />
          <View style={{ flexDirection: "row" }}>
            <View>
              <AppTag
                title="07:30 Pm"
                iconType="clock-o"
                style={{ backgroundColor: "#246EE9" }}
              />
            </View>
            <View style={{ paddingLeft: 40 }}>
              <AppTag
                title="3 Jun 2020"
                iconType="calendar"
                style={{ backgroundColor: "#246EE9" }}
              />
            </View>
          </View>
        </View>
        <Image
          source={require("../../assets/resp3.jpeg")}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 20,
    margin: 10,
    height: 290,
    shadowColor: Color.medium,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  item: {
    padding: 10,
    width: "65%",
  },
  image: {
    width: 120,
    height: 140,
    borderRadius: 20,
    marginTop: 15,
    right: 5,
  },
});

export default AppListItem;
