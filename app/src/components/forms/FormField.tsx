// @ts-nocheck
import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import FormErrorMessage from "./FormErrorMessage";

export interface Props {
  name: string;
}

const FormField: React.FC<Props> = ({ name, ...otherProps }) => {
  const { touched, errors, setFieldTouched, setFieldValue, values } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text: string) => setFieldValue(name, text)}
        value={values[name]}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
export default FormField;
