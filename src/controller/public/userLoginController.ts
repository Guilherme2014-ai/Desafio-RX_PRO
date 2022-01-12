import { Request, Response } from "express";
import IUserLoginRequest from "../../interfaces/IUserLoginRequest";
import userLoginService from "../../services/userLoginService";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const userLoginRequest = req.body as IUserLoginRequest;

    console.log(req.body);

    const token = await userLoginService(userLoginRequest);

    return res.json({ token });
  } catch (e) {
    throw e;
  }
};
