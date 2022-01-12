import { getCustomRepository } from "typeorm";
import ResponseErrorFactory from "../factory/ResponseErrorFactory";
import IUserLoginRequest from "../interfaces/IUserLoginRequest";
import PasswordaHasher from "../password/passwordHasher";
import { UserRepository } from "../repositories/UserRepository";
import { sign } from "jsonwebtoken";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "..", "..", ".env") });

export default async (userLoginRequest: IUserLoginRequest): Promise<string> => {
  try {
    const { email, password } = userLoginRequest;
    if (!email || !password)
      throw new ResponseErrorFactory("Email and Password Required !", 401);

    const _userRepository = await getCustomRepository(UserRepository);
    const user = await _userRepository.findOne({ email });

    if (!user) throw new ResponseErrorFactory("User doesn't Exists !", 400);

    const { password_hash, name, id } = user;
    const passwordMatch = await new PasswordaHasher(password).Compare(
      password_hash,
    );

    if (!passwordMatch) throw new ResponseErrorFactory("Wrong Password !", 401);

    const secret = process.env.JWT_PASS;
    return await sign(
      {
        email,
        name,
      },
      secret,
      {
        subject: `${id}`,
        expiresIn: "4d",
      },
    );
  } catch (e) {
    throw e;
  }
};
