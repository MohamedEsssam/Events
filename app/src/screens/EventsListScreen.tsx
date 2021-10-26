import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import openSocket, { Socket } from "socket.io-client";
import { ApiResponse } from "apisauce";
import { FeedNavigatorParams } from "../navigators/navigatorTypes/NavigatorTypes";

import { EventServices } from "../services/EventServices";
import Event from "../entities/Event";
import AppSearchItem from "../components/AppSearchItem";
import AppEventList from "../components/lists/AppEventList";
import { Color } from "../config/Color";

export interface Props {
  navigation: StackNavigationProp<FeedNavigatorParams, "EventListings">;
}

const service = new EventServices();

const EventsListScreen: React.FC<Props> = React.memo(({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [FetchedEvents, setFetchedEvents] = useState<Array<Event> | undefined>(
    []
  );
  const [isFetched, setFetched] = useState<boolean>(false);
  let events: Array<Event> | undefined;
  useEffect(() => {
    const socket: Socket = openSocket("http://192.168.1.13:9000");
    if (!isFetched) fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    setTimeout(async () => {
      const { data: items, ok }: ApiResponse<Event[]> = await service.getAll();
      if (!ok) return;

      events = items?.slice(0);
      setFetchedEvents(items);
      setFetched(true);
      setLoading(false);
    }, 3000);
  };
  return (
    <View style={styles.container}>
      <AppSearchItem />
      {loading ? (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      ) : (
        <AppEventList items={FetchedEvents} onRefresh={fetchEvents} />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
  },
});

export default EventsListScreen;
