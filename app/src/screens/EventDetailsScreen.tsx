import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppIcon from "../components/AppIcon";

import AppTag from "../components/AppTag";
import AppText from "../components/AppText";
import AppTagsList from "../components/lists/AppTagsList";
import { Color } from "../config/Color";

export interface Props {}

const EventDetailsScreen: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/resp3.jpeg")} style={styles.image} />
      <View style={styles.items}>
        <View>
          <View style={{ width: 250 }}>
            <AppText
              style={{ fontSize: 30, fontStyle: "italic", fontWeight: "bold" }}
            >
              Product Designer Meeting
            </AppText>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AppIcon name="building-o" size={50} />
            <AppText
              style={{ fontSize: 30, fontStyle: "italic", fontWeight: "bold" }}
            >
              Resala
            </AppText>
          </View>
          <AppTagsList
            categories={["Festival", "Musical", "Parties", "Meeting"]}
            style={{ backgroundColor: "#3EB489" }}
            fontSize={15}
            fontColor="white"
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column", paddingRight: 15 }}>
            <AppText
              style={{ fontStyle: "italic", fontWeight: "bold", left: 10 }}
            >
              The Date
            </AppText>
            <AppTag
              title="03 Jun 2018"
              iconType="calendar"
              style={{ backgroundColor: Color.blue }}
            />
          </View>
          <View style={{ flexDirection: "column" }}>
            <AppText
              style={{ fontStyle: "italic", fontWeight: "bold", left: 10 }}
            >
              Location
            </AppText>
            <AppTag
              title="1-3 galalhamd, Alex"
              iconType="location-arrow"
              style={{ backgroundColor: Color.blue }}
            ></AppTag>
          </View>
        </View>
        <View style={{ flexDirection: "column", bottom: 5 }}>
          <AppText style={{ fontStyle: "italic", fontWeight: "bold" }}>
            Description
          </AppText>
          <AppText style={{ color: Color.medium, flexWrap: "wrap" }}>
            dsafhsafhkjashkjsafhakjsdnckjsacnkjsabcshakhskahkjhcsackjasbchcgaschjkasckjascnkajsbckjsgakshfsansjnasjkcasjcaskjhfsajgakhdlKADHJASBKHALJSFLKASNCASJCKJASFHLKANLAKNCJASKGFASHFLKASNCLSAKGKFHALshdalhlj
          </AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "40%",
  },
  items: {
    backgroundColor: Color.white,
    height: "100%",
    padding: 15,
    bottom: 30,
    borderRadius: 30,
  },
});

export default EventDetailsScreen;
