import { Router } from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const limiter = rateLimit({
  windowMs: Number(process.env.windowMs),
  max: Number(process.env.max),
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
