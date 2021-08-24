import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

import AppButton from "./AppButton";
import { Color } from "../config/Color";
import AppTag from "./AppTag";

export interface Props {
  date: Date;
  setDate: any;
}

const AppDatePicker: React.FC<Props> = ({ date, setDate, ...otherProps }) => {
  const [mode, setMode] = useState<any>("date");
  const [show, setShow] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>("arrow-down");

  const showMode = (currentMode: any, state: boolean) => {
    setShow(state);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode("date", true);
    setIcon("arrow-up");
  };
  const closeDatePicker = () => {
    showMode("date", false);
    setIcon("arrow-down");
  };

  return (
    <View style={styles.container}>
      <View>
        <AppButton
          onPress={show === true ? closeDatePicker : showDatePicker}
          title="Birthday"
          color={Color.blue}
          icon={icon}
          style={styles.button}
        />
      </View>
      <AppTag
        title={moment(date).format("ddd, MMM D, YYYY")}
        iconType="calendar"
        fontColor={Color.blue}
        style={{ backgroundColor: Color.white, marginLeft: 10 }}
      />
      {show && (
        <View
          style={{
            backgroundColor: Color.white,
            width: "90%",
            marginLeft: 10,
            borderTopLeftRadius: 30,
            borderBottomRightRadius: 30,
            shadowColor: Color.white,
            shadowOffset: { height: 3, width: 2 },
            shadowOpacity: 0.7,
            shadowRadius: 5,
          }}
        >
          <DateTimePicker
            {...otherProps}
            value={date}
            mode={mode}
            maximumDate={new Date()}
            is24Hour
            display="default"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    margin: 10,
    marginTop: 30,
    width: "50%",
    backgroundColor: Color.white,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: Color.white,
    shadowOffset: { height: 3, width: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
});

export default AppDatePicker;
