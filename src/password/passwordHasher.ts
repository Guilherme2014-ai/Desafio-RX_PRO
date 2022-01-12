import { hash, genSalt } from "bcrypt";

export default class PasswordaHasher {
  constructor(private password: string) {}

  // async Compare() {}
  async Hash(): Promise<string> {
    const salt = await genSalt(10);

    return hash(this.password, salt);
  }
}
