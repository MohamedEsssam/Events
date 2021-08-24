import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";

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
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
  </Navigator>
);

export default FeedNavigator;
