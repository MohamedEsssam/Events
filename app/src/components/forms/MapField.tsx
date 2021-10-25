// @ts-nocheck
import React, { useEffect } from "react";
import { useFormikContext } from "formik";

import AppMap from "../map/AppMap";
import FormErrorMessage from "./FormErrorMessage";

export interface Props {
  name: string;
}

const MapField: React.FC<Props> = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppMap
        coordination={values[name]}
        setCoordination={(coordination: {
          latitude: number;
          longitude: number;
        }) => {
          setFieldValue(name, coordination);
        }}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default MapField;
