"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseErrorFactory_1 = __importDefault(require("../factory/ResponseErrorFactory"));
exports.default = (function (err, req, res, next) {
    console.error(err);
    if (!(err instanceof ResponseErrorFactory_1.default)) {
        res.statusCode = 500;
        return res.json({ err: err });
    }
    var _a = err, status = _a.status, message = _a.message;
    res.statusCode = status;
    return res.json({ message: "" + message });
});
