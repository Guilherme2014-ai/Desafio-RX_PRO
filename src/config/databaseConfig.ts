import { config } from "dotenv";
import { resolve } from "path";
import { UserEntity } from "../entities/UserEntity";

config({ path: resolve(__dirname, "..", "..", ".env") });

const databaseConfig = {
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: "Desafio_RX_PRO",
  logging: true,
  synchronize: true,
  entities: [UserEntity],
};

export default databaseConfig;
