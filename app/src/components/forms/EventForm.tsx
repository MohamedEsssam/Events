import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import FormContainer from "./FormContainer";
import FormField from "./FormField";
import ImagePickerField from "./ImagePickerField";
import PickerField from "./PickerField";

export interface Props {}

const EventForm: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <FormContainer
        validationSchema={Yup.object().shape({})}
        initialValues={{ image: null, categories: "" }}
        onSubmit={() => {}}
      >
        <ImagePickerField name="image" />
        <PickerField name="categories" placeholder="Categories" />
        {/* <FormField/> */}
      </FormContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default EventForm;
