import React from "react";
import { StyleSheet } from "react-native";

import EventsListScreen from "./src/screens/EventsListScreen";
import { Color } from "./src/config/Color";

const App: React.FC = () => {
  return <EventsListScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.light,
  },
});

export default App;
