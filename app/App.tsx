import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import jwdDecode from "jwt-decode";
import Toast from "react-native-toast-message";
import authStorage from "./src/auth/storage";
import UserContext from "./src/auth/auth";

import AppOfflineNotice from "./src/components/AppOfflineNotice";
import FeedNavigator from "./src/navigators/FeedNavigator";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { Color } from "./src/config/Color";
import AppDatePicker from "./src/components/AppDatePicker";
import DatePickerField from "./src/components/forms/DatePickerField";
import ParticipantRegisterForm from "./src/components/forms/ParticipantRegisterForm";
import ParticipantRegisterScreen from "./src/screens/ParticipantRegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import AppMap from "./src/components/map/AppMap";
import AppImageInput from "./src/components/Image/AppImageInput";
import ImagePickerField from "./src/components/forms/ImagePickerField";
import EventForm from "./src/components/forms/EventForm";
import EventFormScreen from "./src/screens/EventFormScreen";
import AppNavigator from "./src/navigators/AppNavigator";

const App: React.FC = () => {
  // useEffect(() => {
  //   const remove = async () => {
  //     await authStorage.removeToken();
  //     setUser(undefined);
  //   };

  //   remove();
  // });

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
      <Toast
        ref={(ref) => Toast.setRef(ref)}
        style={{ zIndex: 1, paddingTop: 10 }}
      />
      <UserContext.Provider value={{ user, setUser }}>
        <AppOfflineNotice />
        <NavigationContainer>
          {!user ? <AuthNavigator /> : <AppNavigator />}
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
