import gql from "graphql-tag";

const GET_USERS = gql`
  query {
    users {
      _id,
      name
    }
  }
`;

export default GET_USERS;
