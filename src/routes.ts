import wmsProxyController from "./controllers/Wms";
import { useCreateRoute } from "./shared/utils/routes";

export const rootRoutes = {
  Wms: useCreateRoute("/wms", wmsProxyController),
};
