import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import config from "config";

export const authJwt: RequestHandler = function (req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access denied, No token provided.");

  try {
    jwt.verify(token, config.get("authSecret"));
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
