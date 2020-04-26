var express = require("express");
const server = require("./schema/index");
const auth = require("./middleware/auth.js");

require("./db");

var app = express();

app.use(auth);

server.applyMiddleware({ app});

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
