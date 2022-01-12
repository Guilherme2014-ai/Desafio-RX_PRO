import IResponseErrors from "../interfaces/IResponseErrors";

export default class ResponseErrorFactory implements IResponseErrors {
  constructor(public message: string, public status: number) {}
}
