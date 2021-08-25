import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ParticipantRegisterScreen from "../screens/ParticipantRegisterScreen";

const { Navigator, Screen } = createStackNavigator();
const FeedNavigator = () => (
  <Navigator mode="modal">
    <Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Screen
      name="ParticipantRegister"
      component={ParticipantRegisterScreen}
      options={{ headerShown: false }}
    />
  </Navigator>
);

export default FeedNavigator;
