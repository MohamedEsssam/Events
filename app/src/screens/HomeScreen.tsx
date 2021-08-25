import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthNavigatorParams } from "../navigators/navigatorTypes/NavigatorTypes";

import AppButton from "../components/AppButton";
import { Color } from "../config/Color";

export interface Props {
  navigation: StackNavigationProp<AuthNavigatorParams, "Home">;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/splash2.png")}
        style={styles.image}
      />
      <View style={{ top: "65%" }}>
        <AppButton
          title="Login"
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.button}
        />
        <AppButton
          title="Register"
          onPress={() => {
            navigation.navigate("ParticipantRegister");
          }}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.blue,
  },
  image: {
    position: "absolute",
    width: 100,
    height: 300,
    left: "37%",
    top: "10%",
  },
  button: {
    margin: 10,
    marginTop: 30,
    width: "95%",
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: Color.white,
    shadowOffset: { height: 3, width: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
});

export default HomeScreen;
