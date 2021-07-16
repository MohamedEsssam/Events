import { RequestHandler } from "express";
import { UserRepository } from "../../repositories/UserRepository";
import UserModel from "../../models/user";

const repository: UserRepository = new UserRepository(UserModel);

export const verify: RequestHandler = async (req, res) => {
  const id = req.query["id"];
  const result: boolean = await repository.verify(id as string);
  if (!result) res.end("<h1>Their is something wrong can't verify");

  res.end("<h1>Your email is Successfully verified");
};
