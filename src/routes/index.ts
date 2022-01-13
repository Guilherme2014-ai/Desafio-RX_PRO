import { NextFunction, Request, Response, Router } from "express";
import userRegisterController from "../controller/public/userRegisterController";
import userLoginController from "../controller/public/userLoginController";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware";
import userMutationController from "../controller/public/userMutationController";
import IUserLoggedRequest from "../interfaces/IUserLoggedRequest";
const router = Router();

router.post("/users/register", userRegisterController);
router.post("/users/login", userLoginController);

router.put(
  "/users/mutation",
  (request: Request, res: Response, next: NextFunction) => {
    const req = request as IUserLoggedRequest; // Alteração feita por conta de bugs
    tokenValidationMiddleware(req, res, next);
  },
  (request: Request, res: Response) => {
    const req = request as IUserLoggedRequest;
    userMutationController(req, res);
  },
);

export default router;
