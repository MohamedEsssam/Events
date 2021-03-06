import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  LogBox,
} from "react-native";
import * as Location from "expo-location";
import moment from "moment";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { FeedNavigatorParams } from "../navigators/navigatorTypes/NavigatorTypes";
import Event from "../entities/Event";

import AppTag from "../components/AppTag";
import AppText from "../components/AppText";
import AppTagsList from "../components/lists/AppTagsList";
import { Color } from "../config/Color";
import AppGoBack from "../components/AppGoBack";
import AppMapView from "../components/map/AppMapView";
import AppShowMoreText from "../components/AppShowMoreText";
import AppIcon from "../components/AppIcon";
import AppItemSeparator from "../components/AppItemSeparator";

export interface Props {
  route: RouteProp<FeedNavigatorParams, "EventDetails">;
  navigation: StackNavigationProp<FeedNavigatorParams, "EventListings">;
}

const EventDetailsScreen: React.FC<Props> = ({ navigation, route }) => {
  LogBox.ignoreAllLogs();
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

    setGeoCodeLocation(
      (locationObject[0].name +
        ", " +
        locationObject[0].region +
        ", " +
        locationObject[0].isoCountryCode) as string
    );
  };

  return (
    <View style={styles.container}>
      <AppGoBack
        color={Color.black}
        onPress={() => {
          navigation.navigate("EventListings");
        }}
      />
      <Image
        source={{
          uri: `http://192.168.1.14:9000/eventImage-${event!._id}`,
        }}
        style={styles.image}
      />
      <View style={styles.items}>
        <TouchableOpacity
          style={{ position: "relative", left: "20%", bottom: 40 }}
        >
          <AppTag
            iconType="check"
            fontSize={25}
            size={30}
            title="Join"
            style={{
              backgroundColor: Color.blue,
              borderRadius: 30,
              width: 200,
              paddingLeft: 50,
            }}
          />
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: 200, bottom: 30 }}
        >
          <View>
            <View style={{ width: 240, flexDirection: "row" }}>
              <AppText
                style={{
                  fontSize: 25,
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                {event!.title}
              </AppText>
            </View>
            <View style={{ paddingBottom: 10 }}>
              <AppMapView
                coordination={{
                  latitude: event!["location"]["coordinates"][0],
                  longitude: event!["location"]["coordinates"][1],
                }}
              />
            </View>
            <View>
              <View
                style={{
                  right: 20,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AppIcon name="location-arrow" color={Color.medium} />
                <AppText
                  style={{
                    fontSize: 14,
                    fontStyle: "italic",
                    fontWeight: "bold",
                    color: Color.medium,
                  }}
                >
                  {geoCodeLocation}
                </AppText>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AppIcon name="clock-o" color={Color.medium} />
                  <AppText
                    style={{
                      fontSize: 14,
                      fontStyle: "italic",
                      fontWeight: "bold",
                      color: Color.medium,
                    }}
                  >
                    07:30 Pm
                  </AppText>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <View
                    style={{
                      left: "90%",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AppText
                      style={{
                        fontSize: 14,
                        fontStyle: "italic",
                        fontWeight: "bold",
                        color: Color.medium,
                      }}
                    >
                      Hold on
                    </AppText>
                    <AppIcon name="calendar" color={Color.medium} />
                    <AppText
                      style={{
                        fontSize: 14,
                        fontStyle: "italic",
                        fontWeight: "bold",
                        color: Color.medium,
                      }}
                    >
                      {moment(event!["holdOn"]).format("ddd, MMM D, YYYY")}
                    </AppText>
                  </View>
                  <View
                    style={{
                      left: "90%",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AppText
                      style={{
                        fontSize: 14,
                        fontStyle: "italic",
                        fontWeight: "bold",
                        color: Color.medium,
                      }}
                    >
                      End in
                    </AppText>
                    <AppIcon name="calendar" color={Color.medium} />
                    <AppText
                      style={{
                        fontSize: 14,
                        fontStyle: "italic",
                        fontWeight: "bold",
                        color: Color.medium,
                      }}
                    >
                      {moment(event!["endIn"]).format("ddd, MMM D, YYYY")}
                    </AppText>
                  </View>
                </View>
              </View>
            </View>
            <AppItemSeparator />
            <View style={{ paddingTop: 10 }}>
              <AppTagsList
                categories={event!.categories}
                style={{ backgroundColor: "#3EB489", marginLeft: 25 }}
                fontSize={15}
                fontColor="white"
              />
            </View>
          </View>
          <View style={{ flexDirection: "column", bottom: 5 }}>
            <AppText style={{ fontStyle: "italic", fontWeight: "bold" }}>
              Description
            </AppText>
            <AppShowMoreText targetLines={2} text={event!.description} />
            {/* <AppText style={{ color: Color.medium, flexWrap: "wrap" }}> */}
            {/* {event!.description} */}
            {/* </AppText> */}
          </View>
        </ScrollView>
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
    // flex: 1,
    backgroundColor: Color.white,
    height: "68%",
    padding: 15,
    bottom: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

export default EventDetailsScreen;
