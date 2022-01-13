import { Response } from "express";
import IUserLoggedPayload from "../../interfaces/IUserLoggedRequest";
import IUserPayload from "../../interfaces/IUserPayload";
import IUsersMutationRequest from "../../interfaces/IUsersMutationRequest";
import userMutationService from "../../services/userMutationService";

export default async (
  req: IUserLoggedPayload,
  res: Response,
): Promise<Response> => {
  try {
    const mutationRequest = req.body as IUsersMutationRequest;
    const payload = req["payload"] as IUserPayload;

    const userUpdated = await userMutationService(mutationRequest, payload);

    return res.json({
      userUpdated,
    });
  } catch (e) {
    throw e;
  }
};
