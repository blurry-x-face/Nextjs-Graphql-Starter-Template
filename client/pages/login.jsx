import { useMutation, useApolloClient } from "@apollo/react-hooks";
import USER_LOGIN_QUERY from "../grapghql/mutation/login";
import MainLayout from "../components/MainLayout.component";
import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import cookie from "cookie";
import redirect from "../lib/redirect";
import FormField from "../components/FormFieldComponent";

export default function Register() {
  const client = useApolloClient();

  const onCompleted = data => {
    // Store the token in cookie
    document.cookie = cookie.serialize("token", data.login.token, {
      maxAge: 30 * 24 * 60 * 60 // 30 days
    });
    // Force a reload of all the current queries now that the user is
    // logged in
    client.cache.reset().then(() => {
      redirect({}, "/");
    });
  };
  const onError = error => {
    // If you want to send error to external service?
    console.error(error);
  };
  const [create, { loading, error, data }] = useMutation(USER_LOGIN_QUERY, {
    onCompleted,
    onError
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <MainLayout title="Register">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          create({
            variables: {
              email: values.email,
              password: values.password
            }
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormField type="email" name="email" errorComponent="div" />
            <FormField type="password" name="password" errorComponent="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </MainLayout>
  );
}
