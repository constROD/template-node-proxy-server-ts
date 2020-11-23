import express, { Application } from "express";
import { rootRoutes } from "./routes";

const app: Application = express();

const { Wms } = rootRoutes;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Proxy Routes
app.use(Wms.path, Wms.controller);

export default app;
