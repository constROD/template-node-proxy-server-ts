import Server from "http-proxy";
import { API_BACKEND_URL } from "../configs/app";

export const PROXY_OPTIONS: Server.ServerOptions = {
  target: API_BACKEND_URL,
  changeOrigin: true,
};
