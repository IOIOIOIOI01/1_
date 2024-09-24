export default (app) => {
  app.get("/", (req, res) => {
    res.send("Home page");
  });

  app.post("/login", (req, res) => {
    const { username, password } = req.body;
    req.session.username = username;
    req.session.password = password;
    res.send(`Logged in as ${username}`);
  });
};
