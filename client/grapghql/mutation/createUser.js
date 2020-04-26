import gql from "graphql-tag";

const USER_LOGIN = gql`
  mutation Creates($userInput: UserInput) {
    createUser(userInput: $userInput) {
      userId
      token
    }
  }
`;

export default USER_LOGIN;
