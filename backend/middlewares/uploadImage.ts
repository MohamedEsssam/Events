import { RequestHandler } from "express";

const path = require("path").resolve(__dirname, "../public");
const fs = require("fs");

export const uploadImage: RequestHandler = function (req, res, next) {
  const image = req.body.image;
  const uuid = req.body.uuid;

  fs.writeFileSync(
    path + `/eventImage-${uuid}`,
    image,
    "base64",
    (err: any) => {
      if (err) throw err;
    }
  );

  next();
};
