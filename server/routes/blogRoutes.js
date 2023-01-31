import { Router } from "express";

import { createBlog } from "../controllers/blogController.js";

const router = Router();

//Add Blogs
router.post("/create", createBlog);

export default router;
