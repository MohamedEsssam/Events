//@ts-nocheck
import React, { useState } from "react";
import { useFormikContext } from "formik";
import { Event } from "@react-native-community/datetimepicker";

import AppDatePicker from "../AppDatePicker";
import FormErrorMessage from "./FormErrorMessage";

export interface Props {
  name: string;
}

const DatePickerField: React.FC<Props> = ({ name, ...otherProps }) => {
  const [date, setDate] = useState<Date>(new Date());
  const { touched, errors, setFieldTouched, setFieldValue, values } =
    useFormikContext();

  const onChange = (event: Event, selectedDate: Date | undefined) => {
    const currentDate = selectedDate;
    setFieldValue(name, currentDate);
    setDate(currentDate as Date);
  };

  return (
    <>
      <AppDatePicker
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChange={onChange}
        value={values[name]}
        date={date}
        setDate={setDate}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default DatePickerField;
