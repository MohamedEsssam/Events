import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EventsListScreen from "../screens/EventsListScreen";
import EventDetailsScreen from "../screens/EventDetailsScreen";

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="EventListings"
      component={EventsListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EventDetails"
      component={EventDetailsScreen}
      options={{ headerShown: false }}
    />
    {/* <Stack.Screen
      name="ListingImage"
      component={ViewImageScreen}
      options={{ headerShown: false }}
    /> */}
  </Stack.Navigator>
);

export default FeedNavigator;
