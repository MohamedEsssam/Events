import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";
import Toast from "react-native-toast-message";
import Event from "../../entities/Event";
import { EventServices } from "../../services/EventServices";
import { MediaServices } from "../../services/MediaService";

import FormContainer from "./FormContainer";
import FormField from "./FormField";
import ImagePickerField from "./ImagePickerField";
import DatePickerField from "./DatePickerField";
import PickerField from "./PickerField";
import MapField from "./MapField";
import AppText from "../AppText";
import SubmitButton from "./SubmitButton";
import { Color } from "../../config/Color";

export interface Props {}

const service = new EventServices();
const mediaService = new MediaServices();
const EventForm: React.FC<Props> = (props) => {
  const onSubmit = async (values: Event) => {
    values.owner = "60ed8bfcd5c1371b5b2c035d";
    const {
      data: event,
      ok: eventSaved,
      status,
    } = await service.create(values);

    if (status === 400)
      return Toast.show({
        type: "info",
        text1: "Error",
        text2: "You must enter a valid data.",
        position: "top",
      });

    if (!eventSaved)
      return Toast.show({
        type: "error",
        text1: "Error",
        text2: "There is something goes wrong, we will fix it soon.",
        position: "top",
      });

    const { ok: imageSaved } = await mediaService.addEventImage(
      event?._id as string,
      values["image"]["base64"]
    );
    if (!imageSaved)
      return Toast.show({
        type: "error",
        text1: "Error",
        text2:
          "There is something goes wrong while saving image, we will fix it soon",
        position: "top",
      });

    // console.log(event);
  };
  return (
    <ScrollView style={styles.container}>
      <FormContainer
        validationSchema={Yup.object().shape({})}
        initialValues={{
          image: null,
          title: "",
          description: "",
          ticketPrice: "",
          holdOn: null,
          endIn: null,
          categories: [],
          location: { latitude: 31.214349, longitude: 29.94576 },
        }}
        onSubmit={onSubmit}
      >
        <View style={{ paddingLeft: 10 }}>
          <ImagePickerField name="image" />
        </View>
        <FormField
          name="title"
          //@ts-ignore
          // iconType="format-title"
          iconBackgroundColor={Color.blue}
          iconColor={Color.white}
          placeholder="Enter The Event Title."
          style={styles.input}
          autoCorrect={false}
        />
        <FormField
          name="description"
          //@ts-ignore
          // iconType="format-title"
          iconBackgroundColor={Color.blue}
          iconColor={Color.white}
          placeholder="Enter The Event Description."
          style={styles.input}
          autoCorrect={false}
          multiline
        />
        <View style={{ width: "60%" }}>
          <FormField
            name="ticketPrice"
            //@ts-ignore
            iconType="dollar"
            iconBackgroundColor={Color.blue}
            iconColor={Color.white}
            placeholder="Ticket Price."
            style={styles.input}
            autoCorrect={false}
            keyboardType="numeric"
          />
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
            Event Holds On
          </AppText>
          <DatePickerField name="holdOn" isBirthday={false} />
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
          <DatePickerField name="endIn" isBirthday={false} />
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
    paddingTop: 10,
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
