const config = require("../config");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("authorization");
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(" ")[1];
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }
  decodedToken = jwt.verify(token, config.jwtSecret, (err, decodedToken) => {
    if (err) {
      req.isAuth = false;
      return next();
    } else if (!decodedToken) {
      req.isAuth = false;
      return next();
    } else {
      req.isAuth = true;
      req.userId = decodedToken.userId;
      return next();
    }
  });
};
