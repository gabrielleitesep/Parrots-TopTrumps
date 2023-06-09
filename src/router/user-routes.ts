import { Router } from "express";
import { signUpJOI, signInJOI } from '../schema/user-schema.js';
import { validate } from "../middleware/validator-middleware.js";
import { signUp, signIn } from "../controller/user-controller.js";

const userRouter = Router();

userRouter.post("/sign-in", validate(signInJOI), signIn);
userRouter.post("/sign-up", validate(signUpJOI), signUp);
export default userRouter;