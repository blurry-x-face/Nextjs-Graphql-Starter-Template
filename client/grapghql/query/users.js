import gql from "graphql-tag";

const GET_ALL_USERS = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      users {
        _id
        name
      }
    }
  }
`;

export default GET_ALL_USERS;
