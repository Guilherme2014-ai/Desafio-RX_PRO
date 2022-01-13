"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var ResponseErrorFactory_1 = __importDefault(require("../factory/ResponseErrorFactory"));
var passwordHasher_1 = __importDefault(require("../password/passwordHasher"));
var UserRepository_1 = require("../repositories/UserRepository");
var jsonwebtoken_1 = require("jsonwebtoken");
var dotenv_1 = require("dotenv");
var path_1 = require("path");
dotenv_1.config({ path: path_1.resolve(__dirname, "..", "..", ".env") });
exports.default = (function (userLoginRequest) { return __awaiter(_this, void 0, void 0, function () {
    var email, password, _userRepository, user, password_hash, name_1, id, passwordMatch, secret, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                email = userLoginRequest.email, password = userLoginRequest.password;
                if (!email || !password)
                    throw new ResponseErrorFactory_1.default("Email and Password Required !", 401);
                return [4 /*yield*/, typeorm_1.getCustomRepository(UserRepository_1.UserRepository)];
            case 1:
                _userRepository = _a.sent();
                return [4 /*yield*/, _userRepository.findOne({ email: email })];
            case 2:
                user = _a.sent();
                if (!user)
                    throw new ResponseErrorFactory_1.default("User doesn't Exists !", 400);
                password_hash = user.password_hash, name_1 = user.name, id = user.id;
                return [4 /*yield*/, new passwordHasher_1.default(password).Compare(password_hash)];
            case 3:
                passwordMatch = _a.sent();
                if (!passwordMatch)
                    throw new ResponseErrorFactory_1.default("Wrong Password !", 401);
                secret = process.env.JWT_PASS;
                return [4 /*yield*/, jsonwebtoken_1.sign({
                        email: email,
                        name: name_1,
                    }, secret, {
                        subject: "" + id,
                        expiresIn: "4d",
                    })];
            case 4: return [2 /*return*/, _a.sent()];
            case 5:
                e_1 = _a.sent();
                throw e_1;
            case 6: return [2 /*return*/];
        }
    });
}); });
