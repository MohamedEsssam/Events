import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import jwdDecode from "jwt-decode";
import authStorage from "./src/auth/storage";
import UserContext from "./src/auth/auth";

import EventsListScreen from "./src/screens/EventsListScreen";
import AppOfflineNotice from "./src/components/AppOfflineNotice";
import EventDetailsScreen from "./src/screens/EventDetailsScreen";
import FeedNavigator from "./src/navigators/FeedNavigator";
import LoginForm from "./src/components/forms/LoginForm";
import { Color } from "./src/config/Color";

const App: React.FC = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const getUserFromStorage = async () => {
    const token = await authStorage.getToken();
    if (!token) return;

    setUser(jwdDecode(token));
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={getUserFromStorage}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <LoginForm />
        {/* <AppOfflineNotice />
      <NavigationContainer>
        <FeedNavigator />
      </NavigationContainer> */}
      </UserContext.Provider>
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
