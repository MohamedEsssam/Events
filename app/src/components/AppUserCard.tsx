import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { useAuth } from "../auth/auth";

import AppText from "./AppText";
import { Color } from "../config/Color";
import AppTouchBar from "./AppTouchBar";

export interface Props {
  user: { verified: boolean | undefined; name: string };
  setUser: (state: any) => void;
}

const AppUserCard: React.FC<Props> = ({ user, setUser }) => {
  return (
    <>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.container}>
        <View>
          <View style={{ flexDirection: "column" }}>
            <Image
              source={require("../../assets/profilepic.jpg")}
              style={styles.profilePic}
              resizeMode="cover"
            />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AppText
                style={{
                  paddingRight: 5,
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                {user["name"]}
              </AppText>
              {user["verified"] && (
                <MaterialIcons name="verified" size={24} color="#23B16A" />
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          position: "relative",
          top: "50%",
          padding: 10,
        }}
      >
        <View style={{ marginBottom: 150 }}>
          <AppTouchBar
            Component={
              <MaterialCommunityIcons
                name="party-popper"
                size={24}
                color="white"
              />
            }
            title="Events you joined"
            onPress={() => console.log("events you joined press.")}
          />
        </View>
        <AppTouchBar
          Component={<AntDesign name="logout" size={24} color="white" />}
          title="Logout"
          onPress={() => setUser(null)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 170,
  },
  profilePic: {
    left: "30%",
    width: 140,
    height: 140,
    borderRadius: 35,
  },
  line: {
    backgroundColor: Color.light,
    width: "100%",
    height: 1,
    position: "relative",
    top: 250,
  },
});

export default AppUserCard;
