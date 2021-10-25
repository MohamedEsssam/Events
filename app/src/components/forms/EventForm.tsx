import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
import { object } from "yup/lib/locale";
import { Color } from "../../config/Color";
import AppText from "../AppText";
import DatePickerField from "./DatePickerField";

import FormContainer from "./FormContainer";
import FormField from "./FormField";
import ImagePickerField from "./ImagePickerField";
import MapField from "./MapField";
import PickerField from "./PickerField";

export interface Props {}

const EventForm: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <FormContainer
        validationSchema={Yup.object().shape({})}
        initialValues={{
          image: null,
          categories: "",
          title: "",
          description: "",
          location: { latitude: 31.214349, longitude: 29.94576 },
        }}
        onSubmit={() => {}}
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
          <DatePickerField name="holdOn" />
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
      </FormContainer>
    </View>
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
});

export default EventForm;
