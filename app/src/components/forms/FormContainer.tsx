import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";

export interface Props {
  initialValues: object;
  validationSchema: any;
  onSubmit: any;
}

const FormContainer: React.FC<Props> = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FormContainer;
