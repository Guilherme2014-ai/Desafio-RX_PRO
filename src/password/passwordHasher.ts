import { hash, genSalt, compare } from "bcrypt";

export default class PasswordaHasher {
  constructor(private password: string) {}

  async Hash(): Promise<string> {
    const salt = await genSalt(10);

    return hash(this.password, salt);
  }
  async Compare(password_hash: string): Promise<boolean> {
    return await compare(this.password, password_hash);
  }
}
