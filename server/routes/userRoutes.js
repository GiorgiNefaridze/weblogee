import { Router } from "express";

import { register, login, getUserData } from "../controllers/userController.js";

const router = Router();

//Regitser user route
router.post("/register", register);

//Login user route
router.post("/login", login);

//Get user data
router.post("/user-data", getUserData);

export default router;
