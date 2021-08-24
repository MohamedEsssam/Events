import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { RegisterParticipantValidation } from "./Validation/RegisterParticipantValidationSchema";

import FormContainer from "./FormContainer";
import FormErrorMessage from "./FormErrorMessage";
import FormField from "./FormField";
import DatePickerField from "./DatePickerField";
import SubmitButton from "./SubmitButton";
import { Color } from "../../config/Color";

export interface Props {}

const RegisterForm: React.FC<Props> = (props) => {
  const [registerFailed, setRegisterFailed] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  return (
    // <View style={styles.container}>
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ flex: 1 }}
      showsVerticalScrollIndicator
    >
      <FormContainer
        validationSchema={RegisterParticipantValidation}
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
          birthday: "",
        }}
        onSubmit={() => {}}
      >
        <FormErrorMessage error={error} visible={registerFailed} />
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
          <DatePickerField name="birthday" />
          <SubmitButton title="Register" style={styles.button} />
        </>
      </FormContainer>
    </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.blue,
  },
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

export default RegisterForm;
