import React from "react";
import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import USER_QUERY from "../graphql/user.query";

const Home = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(USER_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {data.users.map(user => {
          return <li key={`user__${user._id}`}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
