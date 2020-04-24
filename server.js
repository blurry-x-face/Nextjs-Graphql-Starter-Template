var express = require('express');
const server = require('./schema/index');

require("./db");

var app = express();


server.applyMiddleware({ app });


app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');