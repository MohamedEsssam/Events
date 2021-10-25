import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";
import { Color } from "../../config/Color";
import AppText from "../AppText";
import DatePickerField from "./DatePickerField";

import FormContainer from "./FormContainer";
import FormField from "./FormField";
import ImagePickerField from "./ImagePickerField";
import MapField from "./MapField";
import PickerField from "./PickerField";
import SubmitButton from "./SubmitButton";

export interface Props {}

const EventForm: React.FC<Props> = (props) => {
  return (
    <ScrollView style={styles.container}>
      <FormContainer
        validationSchema={Yup.object().shape({})}
        initialValues={{
          image: null,
          title: "",
          description: "",
          holdOn: null,
          endIn: null,
          categories: [],
          location: { latitude: 31.214349, longitude: 29.94576 },
        }}
        onSubmit={(values: any) => {
          console.log(values["categories"]);
        }}
      >
        <ImagePickerField name="image" />
        <FormField
          name="title"
          //@ts-ignore
          // iconType="format-title"
          iconBackgroundColor={Color.blue}
          iconColor={Color.white}
          placeholder="Enter event title."
          style={styles.input}
          autoCorrect={false}
        />
        <FormField
          name="description"
          //@ts-ignore
          // iconType="format-title"
          iconBackgroundColor={Color.blue}
          iconColor={Color.white}
          placeholder="Enter event description."
          style={styles.input}
          autoCorrect={false}
          multiline
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          <AppText
            style={{
              fontStyle: "italic",
              fontWeight: "bold",
              color: Color.light,
            }}
          >
            Event Holds On
          </AppText>
          <DatePickerField name="holdOn" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          <AppText
            style={{
              fontStyle: "italic",
              fontWeight: "bold",
              color: Color.light,
            }}
          >
            Event Ends in
          </AppText>
          <DatePickerField name="endIn" />
        </View>
        <PickerField name="categories" placeholder="Categories" />
        <View
          style={{
            paddingTop: 5,
          }}
        >
          <AppText
            style={{
              left: "22%",
              fontStyle: "italic",
              fontWeight: "bold",
              color: Color.light,
            }}
          >
            Set The Event Location
          </AppText>
          <MapField name="location" />
        </View>
        <SubmitButton
          title="Create"
          style={styles.button}
          color={Color.white}
        />
      </FormContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: Color.white,
    margin: 10,
    opacity: 0.8,
    shadowColor: Color.light,
    shadowOffset: { height: 1, width: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    margin: 10,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: Color.blue,
    width: "95%",
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: Color.blue,
    shadowOffset: { height: 3, width: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
});

export default EventForm;
