import { Application, json } from "express";
import publicRoutes from "../routes/publicRoutes";

module.exports = (app: Application) => {
  app.use(json({ limit: "50mb" }));
  app.use("/api", publicRoutes);
};
