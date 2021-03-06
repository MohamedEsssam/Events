import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ApiResponse } from "apisauce";
import { EventServices } from "../services/EventServices";
import Event from "../entities/Event";

import AppText from "./AppText";
import AppTextInput from "./AppTextInput";
import AppRadioButton from "./AppRadioButton";
import { Color } from "../config/Color";

export interface Props {
  setEvents: (events: Event[] | undefined) => void;
}

const service = new EventServices();

const AppSearchItem: React.FC<Props> = ({ setEvents }) => {
  const onChangeText = async (keyword: string) => {
    const { data: events }: ApiResponse<Event[]> = await service.getAll({
      title: keyword,
    });

    setEvents(events);
  };
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 35 }}>
        <Image
          source={require("../../assets/splash2.png")}
          style={styles.logo}
        />
        <View style={{ flexDirection: "row", padding: 30, top: "7%" }}>
          <AppText style={{ color: "white", fontSize: 35, fontWeight: "bold" }}>
            Find Event
          </AppText>
          <Image
            source={require("../../assets/profilepic.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <AppTextInput
          placeholder="Search For Events"
          iconType="search"
          //@ts-ignore
          onChangeText={(text: string) => onChangeText(text)}
          style={{
            backgroundColor: "#ffffff",
            opacity: 0.5,
            marginLeft: 22,
            marginRight: 30,
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <AppRadioButton />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "35%",
    backgroundColor: Color.blue,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 100,
    top: -40,
  },
  logo: {
    position: "absolute",
    width: 120,
    height: 100,
    left: -40,
    top: 20,
  },
});

export default AppSearchItem;
