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
  error: { color: "red", paddingLeft: 15, fontSize: 15 },
});

export default FormErrorMessage;
