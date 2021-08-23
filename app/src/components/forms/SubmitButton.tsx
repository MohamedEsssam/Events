import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

export interface Props {
  title: string;
  style?: object;
  color?: string;
}

const SubmitButton: React.FC<Props> = ({ title, style, color }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      color={color}
      style={style}
      //@ts-ignore
      onPress={handleSubmit}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SubmitButton;
