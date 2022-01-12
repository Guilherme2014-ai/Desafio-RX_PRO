import { createConnection } from "typeorm";
import databaseConfig from "../config/databaseConfig";

const connection = async () =>
  await createConnection({ type: "mysql", ...databaseConfig });

export default connection;
