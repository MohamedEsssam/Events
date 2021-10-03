// @ts-nocheck
import React from "react";
import { useFormikContext } from "formik";

import FormErrorMessage from "./FormErrorMessage";
import AppImageInput from "../Image/AppImageInput";

export interface Props {
  name: string;
}

const ImagePickerField: React.FC<Props> = ({ name }) => {
  const { touched, errors, setFieldValue, values } = useFormikContext();

  const handleAdd = (img) => {
    setFieldValue(name, img);
  };

  const handleRemove = () => {
    setFieldValue(name, null);
  };

  return (
    <>
      <AppImageInput
        imgUri={values[name] === null ? values[name] : values[name].uri}
        addImage={(img) => handleAdd(img)}
        removeImage={handleRemove}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
export default ImagePickerField;
