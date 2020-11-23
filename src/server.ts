import app from "./App";
import { APP_PORT } from "./shared/configs/app";

app.listen(APP_PORT, async () => {
  console.log("Proxy server listening on port: " + APP_PORT);
});
