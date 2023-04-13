import { Router } from "express";
import { signUpJOI, signInJOI } from '../schema/user-schema.js';
import { validate } from "../middleware/validator-middleware.js";
import { signUp, signIn } from "../controller/user-controller.js";

const userRouter = Router();

userRouter.post("/signup", validate(signUpJOI), signUp);
userRouter.post("/signin", validate(signInJOI), signIn);

export default userRouter;