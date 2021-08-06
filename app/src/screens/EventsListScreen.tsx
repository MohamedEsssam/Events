import React, { useEffect, useState } from "react";
import { ApiResponse } from "apisauce";
import { StyleSheet } from "react-native";
import openSocket, { Socket } from "socket.io-client";

import { EventServices } from "../services/EventServices";
import Event from "../entities/Event";
import AppSearchItem from "../components/AppSearchItem";
import AppEventList from "../components/lists/AppEventList";

export interface Props {}

const service = new EventServices();
const EventsListScreen: React.FC<Props> = React.memo((props) => {
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
    const { data: items, ok }: ApiResponse<Event[]> = await service.getAll();
    if (!ok) return;

    events = items?.slice(0);
    setFetchedEvents(items);
    setFetched(true);
  };
  return (
    <>
      <AppSearchItem />
      <AppEventList items={FetchedEvents} />
    </>
  );
});

const styles = StyleSheet.create({
  container: {},
});

export default EventsListScreen;
