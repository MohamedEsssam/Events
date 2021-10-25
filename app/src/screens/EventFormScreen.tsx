import React from "react";
import AppScreen from "../components/AppScreen";
import EventForm from "../components/forms/EventForm";

export interface Props {}

const EventFormScreen: React.FC<Props> = (props) => {
  return (
    <AppScreen>
      <EventForm />
    </AppScreen>
  );
};

export default EventFormScreen;
