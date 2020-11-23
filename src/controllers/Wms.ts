import { NextFunction, Request, Response } from "express";
import httpProxy from "http-proxy";
import { PROXY_OPTIONS } from "../shared/constants/proxy";

const proxyServer = httpProxy.createProxyServer(PROXY_OPTIONS);

const wmsProxyController = (req: Request, res: Response, next: NextFunction) => {
  const url = req.header("X-URL");
  if (!url) return next();
  req.url = url;
  req.originalUrl = url;
  console.log(">> Endpoint: ", req.method, url);
  proxyServer.web(req, res, { ...PROXY_OPTIONS }, err => console.log(">> Error: ", err.message));
};

export default wmsProxyController;
