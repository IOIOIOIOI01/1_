import app from "./server.js";
import port from "./port.js";

app.listen(port, () => {
  console.log(`"Server listening on port http://localhost:${port}");`);
});
