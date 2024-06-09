import forge from "mappersmith";
import { EncodeJsonMiddleware } from "mappersmith/middleware";

const IP = "172.20.10.2";
const PORT = "8080";
const LocalClient = forge({
  clientId: "LocalClient",
  //Needed because otherwise objects are handled incorrectly.
  middleware: [EncodeJsonMiddleware],
  host: `http://${IP}:${PORT}`,
  resources: {
    User: {
      getHistory: {
        path: "/history",
        method: "GET",
        bodyAttr: "body",
      },
    },
  },
});

export default LocalClient;
