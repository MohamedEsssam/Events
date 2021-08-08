import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EventsListScreen from "../screens/EventsListScreen";
import EventDetailsScreen from "../screens/EventDetailsScreen";

const { Navigator, Screen } = createStackNavigator();
const FeedNavigator = () => (
  <Navigator mode="modal">
    <Screen
      name="EventListings"
      component={EventsListScreen}
      options={{ headerShown: false }}
    />
    <Screen
      name="EventDetails"
      component={EventDetailsScreen}
      options={{ headerShown: false }}
    />
    {/* <Screen
      name="ListingImage"
      component={ViewImageScreen}
      options={{ headerShown: false }}
    /> */}
  </Navigator>
);

export default FeedNavigator;
