import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";

export interface Props {
  error: string;
  visible: boolean;
}

const FormErrorMessage: React.FC<Props> = ({ error, visible }) => {
  if (!visible) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: "white",
    paddingLeft: 40,
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default FormErrorMessage;
