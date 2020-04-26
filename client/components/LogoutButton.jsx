import React from "react";
import { Button } from "@material-ui/core";
import { useApolloClient } from "@apollo/react-hooks";
import cookie from "cookie";
import redirect from "../lib/redirect";

export default function LogoutButton({ name }) {
  const client = useApolloClient();


  const onclick = () => {
    document.cookie = cookie.serialize("token", "", {
      maxAge: 1 // 30 days
    });
    client.cache.reset().then(() => {
      redirect({}, "/");
    });
  };
  return <Button onClick={onclick}>{name}</Button>;
}
