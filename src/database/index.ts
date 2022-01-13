import { createConnection } from "typeorm";
import databaseConfig from "../config/databaseConfig";

const connection = async () => await createConnection(databaseConfig);

export default connection;
