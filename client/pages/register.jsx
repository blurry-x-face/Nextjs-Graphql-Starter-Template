import { useMutation, useApolloClient } from "@apollo/react-hooks";
import USER_LOGIN_QUERY from "../grapghql/mutation/createUser";
import MainLayout from "../components/MainLayout.component";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import cookie from "cookie";
import redirect from "../lib/redirect";

export default function Register() {
  const client = useApolloClient();

  const onCompleted = data => {
    console.log(data.createUser);
    // Store the token in cookie
    document.cookie = cookie.serialize("token", data.createUser.token, {
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
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          create({
            variables: {
              userInput: {
                name: values.name,
                email: values.email,
                password: values.password
              }
            }
          });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </MainLayout>
  );
}
