import { Request, Response } from "express";
import IUserRegisterRequest from "../../interfaces/IUserRegisterRequest";
import userRegisterService from "../../services/userRegisterService";

export default async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const userRequest = req.body as IUserRegisterRequest;

    const { email, name } = await userRegisterService(userRequest);

    return res.json({ email, name });
  } catch (e) {
    throw e;
  }
};
