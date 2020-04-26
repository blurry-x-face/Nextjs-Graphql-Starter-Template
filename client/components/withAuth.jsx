import React, { Component } from "react";
import checkLoggedIn from "../lib/checked-loggedin";

export default function withAuth(C) {
  return class withAuth extends Component {
    static async getInitialProps(context) {
      const { loggedInUser } = await checkLoggedIn(context.apolloClient);
      if (!loggedInUser._id) {
        return { isAuth: false, user: loggedInUser };
      }
      return { isAuth: true, user: loggedInUser };
    }

    render() {
      return <C {...this.props} />;
    }
  };
}
