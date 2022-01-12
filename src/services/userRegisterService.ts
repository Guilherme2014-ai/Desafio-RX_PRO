import IUserRegisterRequest from "../interfaces/IUserRegisterRequest";
import ResponseErrorFactory from "../factory/ResponseErrorFactory";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { UserEntity } from "../entities/UserEntity";

export default async (
  userRequest: IUserRegisterRequest,
): Promise<UserEntity> => {
  try {
    const { name, email, password } = userRequest;

    if (!name || !email || !password)
      throw new ResponseErrorFactory("Some Field wasn't Filled !", 401);

    const _userRepository = getCustomRepository(UserRepository);

    const userAlreadyExistsInDbs = await _userRepository.findOne({
      where: { email },
    });

    if (userAlreadyExistsInDbs)
      throw new ResponseErrorFactory("This user was already Created !", 406);

    const user = await _userRepository.create({
      ...userRequest,
      password_hash: password,
    });
    _userRepository.save(user);

    return user;
  } catch (e) {
    throw e;
  }
};
