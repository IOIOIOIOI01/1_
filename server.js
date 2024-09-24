import express from "express";
import sessionConfig from "./sessionConfig.js";
import session from "express-session";

import routes from "./routes.js";
const app = express();
app.use(express.json());
app.use(session(sessionConfig));
routes(app);

const authenticator = (req, res, next) => {
  if (req.session.username === "admin" && req.session.pasword === "admin") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

export default app;
