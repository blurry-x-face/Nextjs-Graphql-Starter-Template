import gql from "graphql-tag";

const USER_LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      userId
      userName
    }
  }
`;

export default USER_LOGIN;
