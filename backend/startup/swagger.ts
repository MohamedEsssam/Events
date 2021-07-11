import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

module.exports = function (app: express.Application) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
