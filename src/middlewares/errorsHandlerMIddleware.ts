import { Request, Response, NextFunction } from "express";
import ResponseErrorFactory from "../factory/ResponseErrorFactory";
import IResponseErrors from "../interfaces/IResponseErrors";

export default (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): Response => {
  console.error(err);
  if (!(err instanceof ResponseErrorFactory)) {
    res.statusCode = 500;
    return res.json({ err });
  }
  const { status, message } = err as IResponseErrors;
  res.statusCode = status;
  return res.json({ message: `${message}` });
};
