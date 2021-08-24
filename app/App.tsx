import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import jwdDecode from "jwt-decode";
import authStorage from "./src/auth/storage";
import UserContext from "./src/auth/auth";

import AppOfflineNotice from "./src/components/AppOfflineNotice";
import FeedNavigator from "./src/navigators/FeedNavigator";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { Color } from "./src/config/Color";
import { useEffect } from "react";
import AppDatePicker from "./src/components/AppDatePicker";
import DatePickerField from "./src/components/forms/DatePickerField";
import RegisterForm from "./src/components/forms/RegisterForm";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";

const App: React.FC = () => {
  useEffect(() => {
    const remove = async () => {
      await authStorage.removeToken();
      setUser(undefined);
    };

    remove();
  });
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
        <AppOfflineNotice />
        <NavigationContainer>
          {!user ? <AuthNavigator /> : <FeedNavigator />}
        </NavigationContainer>
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
