import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedNavigator from "./FeedNavigator";
import EventFormScreen from "../screens/EventFormScreen";
import AppAddEventButton from "../components/AppAddEventButton";
import EventDetailsScreen from "../screens/EventDetailsScreen";

const { Navigator, Screen } = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="EventEdit"
        component={EventFormScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <AppAddEventButton
              onPress={() => navigation.navigate("EventEdit")}
            />
          ),
        })}
      />
      <Screen
        name="Account"
        component={EventDetailsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppNavigator;
