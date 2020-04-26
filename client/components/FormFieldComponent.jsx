import React from "react";
import { Field, ErrorMessage } from "formik";

export default function FormFieldComponent({ type, name, errorComponent }) {
  return (
    <>
      <Field type={type} name={name} />
      <ErrorMessage name={name} component={errorComponent} />
    </>
  );
}
