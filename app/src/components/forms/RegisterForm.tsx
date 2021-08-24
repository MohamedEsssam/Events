import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DatePickerField from "./DatePickerField";

import FormContainer from "./FormContainer";
import FormErrorMessage from "./FormErrorMessage";
import SubmitButton from "./SubmitButton";

export interface Props {}

const RegisterForm: React.FC<Props> = (props) => {
  const [registerFailed, setRegisterFailed] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={{ top: "50%" }}>
        <FormContainer
          validationSchema={{}}
          initialValues={{ birthday: null }}
          onSubmit={(values: object) => {}}
        >
          <FormErrorMessage error={error} visible={registerFailed} />
          <>
            <DatePickerField name="birthday" />
            <SubmitButton title="Register" />
          </>
        </FormContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default RegisterForm;
