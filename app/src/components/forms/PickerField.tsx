// @ts-nocheck
import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import FormErrorMessage from "./FormErrorMessage";

export interface Props {
  name: string;
  placeholder: string;
}

const PickerField: React.FC<Props> = ({ name, placeholder }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        placeholder={placeholder}
        selectedItem={values[name]}
        handleSelectItem={(item: string) => {
          setFieldValue(name, item);
        }}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default PickerField;
