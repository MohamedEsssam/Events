import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import * as Location from "expo-location";
import moment from "moment";

import AppTag from "./AppTag";
import AppText from "./AppText";
import AppTagsList from "./lists/AppTagsList";
import { Color } from "../config/Color";
import Event from "../entities/Event";

const AppListItem: React.FC<Event> = ({
  title,
  categories,
  holdOn,
  location,
  owner,
  onPress,
}) => {
  const [geoCodeLocation, setGeoCodeLocation] = useState<string>("");
  useEffect(() => {
    getLocation();
  });

  const getLocation = async (): Promise<void> => {
    const locationObject = await Location.reverseGeocodeAsync({
      latitude: location["coordinates"][0],
      longitude: location["coordinates"][1],
    });

    setGeoCodeLocation(
      locationObject[0].name +
        ", " +
        locationObject[0].district +
        ", " +
        locationObject[0].region +
        " " +
        locationObject[0].postalCode +
        ", " +
        locationObject[0].isoCountryCode
    );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.item}>
          <AppText
            style={{ fontSize: 30, fontStyle: "italic", fontWeight: "bold" }}
          >
            {title}
          </AppText>
          <AppTagsList
            categories={categories}
            style={{ backgroundColor: "#3EB489" }}
          />
          <AppTag
            iconType="location-arrow"
            title={geoCodeLocation}
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
                title={moment(holdOn).format("ddd, MMM D, YYYY")}
                iconType="calendar"
                style={{ backgroundColor: "#246EE9", right: 20 }}
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
