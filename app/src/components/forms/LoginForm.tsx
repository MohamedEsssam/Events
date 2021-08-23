import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import jwdDecode from "jwt-decode";
import authStorage from "../../auth/storage";
import { loginValidationSchema } from "./Validation/LoginValidationSchema";
import { useAuth } from "../../auth/auth";
import { UserServices } from "../../services/UserServices";
import User from "../../entities/User";

import FormContainer from "./FormContainer";
import FormErrorMessage from "./FormErrorMessage";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";
import { Color } from "../../config/Color";

export interface Props {}

const service = new UserServices();
const LoginForm: React.FC<Props> = (props) => {
  const { setUser, user } = useAuth();
  const [loginFailed, setLoginFailed] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const onSubmit = async (values: User, { resetForm }: any) => {
    const { data: token, ok } = await service.login({
      email: values["email"],
      password: values["password"] as string,
    });
    if (!ok) {
      setError("Invalid email or password");
      return setLoginFailed(true);
    }

    const loggedInUser: User = jwdDecode(token as string);
    if (loggedInUser["verified"] === false) {
      setError("Verify your account.");
      return setLoginFailed(true);
    }

    setLoginFailed(false);
    authStorage.storeToken(token as string);
    setUser(loggedInUser);
  };
  return (
    <View style={styles.container}>
      <View style={{ top: "50%" }}>
        <FormContainer
          validationSchema={loginValidationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={onSubmit}
        >
          <FormErrorMessage error={error} visible={loginFailed} />
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
            <SubmitButton title="Login" style={styles.button} />
          </>
        </FormContainer>
      </View>
    </View>
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

export default LoginForm;
