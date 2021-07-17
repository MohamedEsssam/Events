import React from "react";
import { StyleSheet, View } from "react-native";
import AppIcon from "./src/components/AppIcon";

import AppText from "./src/components/AppText";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppIcon name="email" />
      <AppText>hello events</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
