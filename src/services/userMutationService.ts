import { getCustomRepository } from "typeorm";
import ResponseErrorFactory from "../factory/ResponseErrorFactory";
import IUsersMutationRequest from "../interfaces/IUsersMutationRequest";
import { UserEntity } from "../entities/UserEntity";
import { UserRepository } from "../repositories/UserRepository";
import EntriesToObjectFactory from "../factory/EntriesToObjectFactory";
import IUserPayload from "../interfaces/IUserPayload";

// definir Interface do payload.

export default async (
  mutationRequest: IUsersMutationRequest,
  userPayload: IUserPayload,
): Promise<UserEntity> => {
  try {
    const dataEntries = Object.entries(mutationRequest).filter(
      (keyValue) => keyValue[1],
    );

    if (dataEntries.length == 0 || !dataEntries)
      throw new ResponseErrorFactory("At least One Field to be Updeted !", 400);

    const dataToUpdate = EntriesToObjectFactory(dataEntries);

    const { sub: id } = userPayload;

    const _userRepository = await getCustomRepository(UserRepository);

    await _userRepository.update(
      {
        id,
      },
      dataToUpdate,
    );

    const userUpdated = await _userRepository.findOne(id, {
      select: ["email", "name"],
    });

    if (!userUpdated)
      throw new ResponseErrorFactory("user no longer exists !", 400);

    return userUpdated;
  } catch (e) {
    throw e;
  }
};
