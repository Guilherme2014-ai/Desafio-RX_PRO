import { config } from "dotenv";
import { resolve } from "path";
import { UserEntity } from "../entities/UserEntity";

config({ path: resolve(__dirname, "..", "..", ".env") });

const databaseConfig = {
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  logging: true,
  synchronize: true,
  entities: [UserEntity],
};

export default databaseConfig;
