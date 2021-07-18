import React from "react";
import { StyleSheet, View } from "react-native";
import AppIcon from "./src/components/AppIcon";
import AppItemSeparator from "./src/components/AppItemSeparator";
import AppScreen from "./src/components/AppScreen";

import AppText from "./src/components/AppText";
import AppTextInput from "./src/components/AppTextInput";

const App: React.FC = () => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <AppItemSeparator />
        <AppIcon name="email" />
        <AppText>hello events</AppText>
        <AppTextInput
          iconType="email"
          iconSize={30}
          iconColor="#4ecdc4"
          iconBackgroundColor="#ffffff"
          placeholder="Login"
          style={{ backgroundColor: "red", width: "60%" }}
        />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
