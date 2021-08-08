import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import moment from "moment";

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { FeedNavigatorParams } from "../navigators/navigatorTypes/NavigatorTypes";
import Event from "../entities/Event";

import AppIcon from "../components/AppIcon";
import AppTag from "../components/AppTag";
import AppText from "../components/AppText";
import AppTagsList from "../components/lists/AppTagsList";
import { Color } from "../config/Color";

export interface Props {
  route: RouteProp<FeedNavigatorParams, "EventDetails">;
  navigation: StackNavigationProp<FeedNavigatorParams, "EventListings">;
}

const EventDetailsScreen: React.FC<Props> = ({ navigation, route }) => {
  const event: Event | undefined = route["params"];
  const [geoCodeLocation, setGeoCodeLocation] = useState<string>("");
  useEffect(() => {
    getLocation();
  });

  const getLocation = async (): Promise<void> => {
    const locationObject = await Location.reverseGeocodeAsync({
      latitude: event!["location"]["coordinates"][0],
      longitude: event!["location"]["coordinates"][1],
    });

    setGeoCodeLocation(locationObject[0].name as string);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/resp3.jpeg")} style={styles.image} />
      <View style={styles.items}>
        <View>
          <View style={{ width: 250, flexDirection: "row" }}>
            <AppText
              style={{ fontSize: 30, fontStyle: "italic", fontWeight: "bold" }}
            >
              {event!.title}
            </AppText>
            <TouchableOpacity style={{ position: "absolute", left: "95%" }}>
              <AppTag
                iconType="check"
                fontSize={25}
                size={40}
                title="Join"
                style={{
                  backgroundColor: Color.blue,
                  borderRadius: 30,
                }}
              />
            </TouchableOpacity>
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
            categories={event!.categories}
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
              title={moment(event!["holdOn"]).format("ddd, MMM D, YYYY")}
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
              title={geoCodeLocation}
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
            {event!.description}
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
