import { RequestHandler } from "express";
import BadRequest from "../../../exceptions/BadRequest";

export const uploadEventImage: RequestHandler = async (req, res) => {
  if (!req.body.image || !req.body.uuid)
    return res.status(BadRequest.httpCode).send(BadRequest);

  res.status(200).json("image saved successfully");
};
