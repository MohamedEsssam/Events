import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import EventsListScreen from "./src/screens/EventsListScreen";
import { Color } from "./src/config/Color";
import AppOfflineNotice from "./src/components/AppOfflineNotice";
import EventDetailsScreen from "./src/screens/EventDetailsScreen";
import FeedNavigator from "./src/navigators/FeedNavigator";

const App: React.FC = () => {
  return (
    <>
      <AppOfflineNotice />
      <NavigationContainer>
        <FeedNavigator />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default App;
