import { Router } from "express";

import { register, login } from "../controllers/userController.js";

const router = Router();

//Regitser user route
router.post("/register", register);

//Login user route
router.post("/login", login);

export default router;
