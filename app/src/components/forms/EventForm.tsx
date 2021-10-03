import React from "react";
import { View, StyleSheet } from "react-native";
import FormContainer from "./FormContainer";
import ImagePickerField from "./ImagePickerField";
import * as Yup from "yup";

export interface Props {}

const EventForm: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <FormContainer
        validationSchema={Yup.object().shape({})}
        initialValues={{ image: null }}
        onSubmit={() => {}}
      >
        <ImagePickerField name="image" />
      </FormContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default EventForm;
