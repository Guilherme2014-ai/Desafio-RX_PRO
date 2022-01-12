import { Router } from "express";
import userRegisterController from "../controller/public/userRegisterController";
import userLoginController from "../controller/public/userLoginController";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware";
const router = Router();

router.post("/users/register", userRegisterController);
router.post("/users/login", userLoginController);

router.put("/users/mutation", tokenValidationMiddleware, (req, res) => {
  return res.json({ msg: "isso ai" });
});

export default router;
