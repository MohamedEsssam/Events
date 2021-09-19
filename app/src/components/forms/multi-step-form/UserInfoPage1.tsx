import React from "react";
import { StyleSheet } from "react-native";
import DatePickerField from "../DatePickerField";

export interface Props {}

const UserInfoPage1: React.FC<Props> = (props) => {
  return (
    <>
      <DatePickerField name="birthDate" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default UserInfoPage1;
