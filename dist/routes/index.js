"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRegisterController_1 = __importDefault(require("../controller/public/userRegisterController"));
var userLoginController_1 = __importDefault(require("../controller/public/userLoginController"));
var tokenValidationMiddleware_1 = __importDefault(require("../middlewares/tokenValidationMiddleware"));
var userMutationController_1 = __importDefault(require("../controller/public/userMutationController"));
var router = express_1.Router();
router.post("/users/register", userRegisterController_1.default);
router.post("/users/login", userLoginController_1.default);
router.put("/users/mutation", tokenValidationMiddleware_1.default, userMutationController_1.default);
exports.default = router;
