import express from "express";
import cors from "cors";
import config from "config";

module.exports = (app: express.Application) => {
  const options: cors.CorsOptions = {
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "X-Access-Token",
      "Authorization",
    ],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: config.get("clientApi"),
    preflightContinue: false,
  };
  app.use(cors(options));
};
