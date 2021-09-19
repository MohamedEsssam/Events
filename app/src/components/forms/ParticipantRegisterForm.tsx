import React, { ReactElement, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RegisterParticipantValidation } from "./Validation/RegisterParticipantValidationSchema";
import { ParticipantServices } from "../../services/ParticipantServices";
import Participant from "../../entities/Participant";

import FormContainer from "./FormContainer";
import FormErrorMessage from "./FormErrorMessage";
import UserInfoPage0 from "./multi-step-form/UserInfoPage0";
import UserInfoPage1 from "./multi-step-form/UserInfoPage1";
import UserInfoPage2 from "./multi-step-form/UserInfoPage2";
import SubmitButton from "./SubmitButton";
import AppButton from "../AppButton";
import { Color } from "../../config/Color";

export interface Props {}

const service = new ParticipantServices();
const ParticipantRegisterForm: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const pages: Array<ReactElement> = [
    <UserInfoPage0 />,
    <UserInfoPage1 />,
    <UserInfoPage2 />,
  ];
  const [page, setPage] = useState<number>(0);
  const [registerFailed, setRegisterFailed] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const nextPage = () => setPage(page + 1);
  const previousPage = () => setPage(page - 1);

  const onSubmit = async (values: Participant, { restForm }: any) => {
    const { data: participant, ok } = await service.register({
      email: values["email"],
      password: values["password"] as string,
      firstName: values["firstName"],
      lastName: values["lastName"],
      birthDate: values["birthDate"],
      verified: false,
    });

    if (!ok) {
      setError("User already exist");
      return setRegisterFailed(true);
    }

    setRegisterFailed(false);

    navigation.navigate("Login");
  };
  return (
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
          birthDate: null,
        }}
        onSubmit={onSubmit}
      >
        <FormErrorMessage error={error} visible={registerFailed} />
        <>
          {pages[page]}
          {page > 0 ? (
            <AppButton
              title="Previous"
              onPress={previousPage}
              style={styles.button}
            />
          ) : null}
          {page === pages.length - 1 ? (
            <SubmitButton title="Register" style={styles.button} />
          ) : (
            <AppButton title="Next" onPress={nextPage} style={styles.button} />
          )}
        </>
      </FormContainer>
    </ScrollView>
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
    marginTop: 10,
    width: "95%",
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: Color.white,
    shadowOffset: { height: 3, width: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
});

export default ParticipantRegisterForm;
