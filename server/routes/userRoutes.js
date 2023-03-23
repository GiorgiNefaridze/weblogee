import { Router } from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const limiter = rateLimit({
  windowMs: 0 * 60 * 1000,
  max: 2,
  message: { message: process.env.REQ_LIMITER },
});

import { register, login, getUserData } from "../controllers/userController.js";

const router = Router();

//Regitser user route
router.post("/register", limiter, register);

//Login user route
router.post("/login", limiter, login);

//Get user data
router.post("/user-data", getUserData);

export default router;
