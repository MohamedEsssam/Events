import { Repository } from "./repository/Repository";
import * as bcrypt from "bcrypt";
import User from "../entities/User";
import { validateUserSchema } from "../schemas/UserSchema";
import BadRequest from "../exceptions/BadRequest";
import { AuthServices } from "../services/AuthService";

const authService = new AuthServices();
export class UserRepository extends Repository<User> {
  public async login(
    email: string,
    password: string
  ): Promise<[User, string] | null> {
    const { error } = validateUserSchema({
      email: email,
      password: password,
      verified: false,
    });
    if (error) throw new Error(BadRequest.description);

    const loginUser = await this.model.findOne({ email: email });
    if (!loginUser) return null;
    if (
      !(await this.isMatchedPassword(password, loginUser["password"] as string))
    )
      return null;

    const token = authService.generateToken(loginUser);

    return [loginUser, token];
  }

  public async verify(id: string): Promise<boolean> {
    const user = await this.model.findById({ _id: id });
    if (!user) return false;

    await user.updateOne({ verified: true });

    return true;
  }

  public async resetPassword() {}

  private async isMatchedPassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
