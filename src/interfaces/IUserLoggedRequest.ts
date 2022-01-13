import { Request } from "express";

export default interface IUserLoggedRequest extends Request {
  payload: object;
}
