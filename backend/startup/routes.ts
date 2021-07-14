import { Application, json } from "express";
import publicRoutes from "../routes/publicRoutes";
import privateRoutes from "../routes/privateRoutes";

module.exports = (app: Application) => {
  app.use(json({ limit: "50mb" }));
  app.use("/api", [privateRoutes, publicRoutes]);
};
