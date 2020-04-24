const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  db: process.env.MONGODB_URI,
  allowedOrigins: [
    "http://localhost:3000",
    "http://yourapp.com",
    "http://localhost:4020"
  ]
};
