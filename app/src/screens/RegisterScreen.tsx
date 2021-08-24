import React from "react";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppGoBack from "../components/AppGoBack";
import RegisterForm from "../components/forms/RegisterForm";
import { Color } from "../config/Color";

export interface Props {}

const RegisterScreen: React.FC<Props> = (props) => {
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
        <View
          style={{ flex: 1, backgroundColor: Color.blue, paddingTop: "85%" }}
        >
          <RegisterForm />
        </View>
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

export default RegisterScreen;
