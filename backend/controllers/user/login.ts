import { RequestHandler } from "express";
import { UserRepository } from "../../repositories/UserRepository";
import UserModel from "../../models/user";
import User from "../../entities/User";
import UserNotFound from "../../exceptions/UserNotFound";

const repository: UserRepository = new UserRepository(UserModel);
export const login: RequestHandler = async (req, res) => {
  const request: User = req.body;
  try {
    const user: User | null = await repository.login(
      request["email"],
      request["password"] as string
    );

    if (!user) return res.status(UserNotFound.httpCode).send(UserNotFound);

    return res.status(200).send(user);
  } catch (error) {}
};
