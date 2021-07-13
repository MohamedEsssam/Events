import * as bcrypt from "bcrypt";
export async function encryptPassword(
  password: string
): Promise<string | null> {
  const genSalt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, genSalt);
}
