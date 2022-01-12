import { Request, Response, NextFunction } from "express";
import ResponseErrorFactory from "../factory/ResponseErrorFactory";
import IResponseErrors from "../interfaces/IResponseErrors";

export default (
  err,
  req: Request,
  res: Response,
  next: NextFunction,
): Response => {
  console.log("MIDDLEWARE AQUI !!!!!");
  console.error(err);
  if (!(err instanceof ResponseErrorFactory)) {
    res.statusCode = 500;
    return res.json({ err });
  }
  const { status, message } = err as IResponseErrors;
  res.statusCode = status;
  return res.json({ message: `${message}` });
};
