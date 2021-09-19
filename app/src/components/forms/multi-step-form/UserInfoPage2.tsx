import React from "react";
import { StyleSheet } from "react-native";

import FormField from "../FormField";
import { Color } from "../../../config/Color";

export interface Props {}

const UserInfoPage2: React.FC<Props> = (props) => {
  return (
    <>
      <FormField
        name="email"
        //@ts-ignore
        iconType="envelope"
        iconBackgroundColor={Color.blue}
        iconColor={Color.white}
        placeholder="Enter your email."
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="emailAddress"
      />
      <FormField
        name="password"
        //@ts-ignore
        iconType="lock"
        iconBackgroundColor={Color.blue}
        iconColor={Color.white}
        placeholder="Enter your password."
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="password"
      />
      <FormField
        name="confirmPassword"
        //@ts-ignore
        iconType="lock"
        iconBackgroundColor={Color.blue}
        iconColor={Color.white}
        placeholder="Enter your confirm password."
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="password"
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

export default UserInfoPage2;
