import React from "react";
import { StyleSheet } from "react-native";

import EventsListScreen from "./src/screens/EventsListScreen";
import { Color } from "./src/config/Color";
import AppOfflineNotice from "./src/components/AppOfflineNotice";
import EventDetailsScreen from "./src/screens/EventDetailsScreen";

const App: React.FC = () => {
  return (
    <>
      <AppOfflineNotice />
      <EventDetailsScreen />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.light,
  },
});

export default App;
