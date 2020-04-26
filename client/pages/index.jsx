import { useQuery } from "@apollo/react-hooks";
import MainLayout from "../components/MainLayout.component";
import React, { Component } from "react";
import withAuth from "../components/withAuth";

const Home = props => {
  const { isAuth } = props;
  return (
    <MainLayout title="Home">
      {isAuth ? (
        <div className="container">Login Succesfull: {props.user.name}</div>
      ) : (
        <div className="container">Please login</div>
      )}
    </MainLayout>
  );
};
export default withAuth(Home);
