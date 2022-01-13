import { NextFunction, Request, Response } from "express";
import ResponseErrorFactory from "../factory/ResponseErrorFactory";
import { verify } from "jsonwebtoken";
import { resolve } from "path";
import { config } from "dotenv";

config({ path: resolve(__dirname, "..", "..", ".env") });

const secret = process.env.JWT_PASS as string;

interface IUserLoggedPayload extends Request {
  payload: object;
}

export default async (
  req: IUserLoggedPayload,
  res: Response,
  next: NextFunction,
) => {
  const authorization = req.headers["authorization"];
  if (!authorization) throw new ResponseErrorFactory("Token Required !", 400);

  const token: string =
    authorization.split(" ").length > 1
      ? authorization.split(" ")[1]
      : authorization;

  const payload = await verify(token, secret);

  req["payload"] = payload;

  next();
};
