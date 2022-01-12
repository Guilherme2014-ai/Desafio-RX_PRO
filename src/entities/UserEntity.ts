import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BaseEntity,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import PasswordaHasher from "../password/passwordHasher";

@Entity("users")
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password_hash: string;

  @BeforeInsert()
  async handle() {
    const hash = await new PasswordaHasher(this.password_hash).Hash();

    this.id = `${uuidV4()}`;
    this.password_hash = hash;
  }
}
