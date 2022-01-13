"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
var app_1 = __importDefault(require("./app"));
var PORT = process.env.PORT || 80;
app_1.default.listen(PORT, function () {
    console.log("Server is Running at Port 80 !");
});