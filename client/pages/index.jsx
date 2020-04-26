import MainLayout from "../components/MainLayout";
import React from "react";
import withAuth from "../components/withAuth";
import Container from "../components/Container";
import { Alert } from "@material-ui/lab";

const Home = props => {
  const { isAuth } = props;
  return (
    <MainLayout isAuth={isAuth} title="Home">
      <Container>
        {isAuth ? (
          <Alert className="login-form" severity="success">
            You are logged in as: {props.user.name}
          </Alert>
        ) : (
          <Alert className="login-form" severity="info">You need to login first</Alert>
        )}
      </Container>
    </MainLayout>
  );
};
export default withAuth(Home);
