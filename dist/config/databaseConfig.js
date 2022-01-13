"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var path_1 = require("path");
var UserEntity_1 = require("../entities/UserEntity");
dotenv_1.config({ path: path_1.resolve(__dirname, "..", "..", ".env") });
var databaseConfig = {
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: "Desafio_RX_PRO",
    logging: true,
    synchronize: true,
    entities: [UserEntity_1.UserEntity],
};
exports.default = databaseConfig;
