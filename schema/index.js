const { ApolloServer, gql } = require("apollo-server-express");
const resolvers = require("../resolvers");

const typeDefs = gql`
  type Query {
    users: [User!]!
    user(userId: ID!): User!
    self: Self!
  }
  type Mutation {
    login(email: String!, password: String!): AuthData!
    createUser(userInput: UserInput): AuthData!
    updateUser(updateUser: UpdateUser): User!
  }
  type Subscription {
    userAdded: User
  }
  type User {
    _id: ID!
    email: String!
    name: String!
    createdAt: String!
    updatedAt: String!
  }
  type AuthData {
    userId: ID!
    userName: String
    token: String!
    tokenExpiration: Int!
  }
  input UserInput {
    email: String!
    name: String!
    password: String!
  }
  input UpdateUser {
    email: String
    name: String
    password: String
  }
  type Self {
    _id: ID!
    email: String!
    name: String!
    createdAt: String!
    updatedAt: String!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  context: async ({ req, connection, payload }) => {
    if (connection) {
      return { isAuth: payload.authToken };
    }
    return { isAuth: req.isAuth, userId: req.userId };
  }
});

module.exports = server;
