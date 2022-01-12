import { Router } from "express";
import userRegisterController from "../controller/public/userRegisterController";
import userLoginController from "../controller/public/userLoginController";
const router = Router();

router.post("/users/register", userRegisterController);
router.post("/users/login", userLoginController);

router.post("/users/mutation", userLoginController);

export default router;
