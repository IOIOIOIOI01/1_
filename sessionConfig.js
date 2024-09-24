import session from "express-session";

const sessionConfig = {
  secret: "your_secret_key",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
};

export default sessionConfig;
