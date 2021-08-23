import React from "react";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LoginForm from "../components/forms/LoginForm";
import AppGoBack from "../components/AppGoBack";
import { Color } from "../config/Color";

export interface Props {}

const LoginScreen: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <AppGoBack
          color={Color.white}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <Image
          source={require("../../assets/splash2.png")}
          style={styles.image}
        />
        <LoginForm />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    zIndex: 1,
    position: "absolute",
    width: 100,
    height: 300,
    left: "37%",
    top: "10%",
  },
});

export default LoginScreen;
