const express = require("express");

const { tryCatchWrapper } = require("../helpers/index");
const { signUp, signIn } = require("../controller/auth.controller");

const authRouter = express.Router();

authRouter.post("/signup", tryCatchWrapper(signUp));
authRouter.post("/signin", tryCatchWrapper(signIn));

module.exports = { authRouter };
