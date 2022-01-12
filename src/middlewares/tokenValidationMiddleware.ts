import { NextFunction, Request, Response } from "express";
import ResponseErrorFactory from "../factory/ResponseErrorFactory";
import { verify } from "jsonwebtoken";
import { resolve } from "path";
import { config } from "dotenv";

config({ path: resolve(__dirname, "..", "..", ".env") });

const secret = process.env.JWT_PASS;

export default async (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers["authorization"];
  if (!authorization) throw new ResponseErrorFactory("Token Required !", 400);

  const token: string = authorization.split(" ")[1];

  const payload = await verify(token, secret);

  req["payload"] = payload;

  next();
};
