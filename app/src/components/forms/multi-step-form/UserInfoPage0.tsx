import React from "react";
import { StyleSheet } from "react-native";

import FormField from "../FormField";
import { Color } from "../../../config/Color";

export interface Props {}

const UserInfoPage: React.FC<Props> = (props) => {
  return (
    <>
      <FormField
        name="firstName"
        //@ts-ignore
        iconType="user-o"
        iconBackgroundColor={Color.blue}
        iconColor={Color.white}
        placeholder="Enter your firstName."
        style={styles.input}
        autoCorrect={false}
        textContentType="username"
      />
      <FormField
        name="lastName"
        //@ts-ignore
        iconType="user-o"
        iconBackgroundColor={Color.blue}
        iconColor={Color.white}
        placeholder="Enter your lastName."
        style={styles.input}
        autoCorrect={false}
        textContentType="username"
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Color.white,
    margin: 10,
    opacity: 0.8,
    shadowColor: Color.white,
    shadowOffset: { height: 3, width: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default UserInfoPage;
