var express = require("express");
const server = require("./schema/index");
const auth = require("./middleware/auth.js");
var cors = require("cors");
const config = require("./config")

require("./db");

var app = express();

/* app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        return callback(null, true);
      }
      if (config.allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not
      allow access from the specified Origin.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);
 */
app.use(auth);

server.applyMiddleware({ app });

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
