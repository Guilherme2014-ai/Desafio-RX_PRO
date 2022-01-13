import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import PasswordaHasher from "../password/passwordHasher";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password_hash: string;

  @BeforeInsert()
  async handle() {
    const hash = await new PasswordaHasher(this.password_hash).Hash();

    this.password_hash = hash;
  }
}
