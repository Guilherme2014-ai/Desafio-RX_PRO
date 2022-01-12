import { Router } from "express";
import userRegisterController from "../controller/public/userRegisterController";
const router = Router();

router.post("/users/register", userRegisterController);

export default router;
