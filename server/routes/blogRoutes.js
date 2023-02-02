import { Router } from "express";

import { getAllBlogs, createBlog } from "../controllers/blogController.js";

const router = Router();

//Get All Blogs
router.get("/getBlogs", getAllBlogs);

//Add Blogs
router.post("/create", createBlog);

export default router;
