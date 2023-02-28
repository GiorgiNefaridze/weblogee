import { Router } from "express";

import { getAllBlogs, createBlog, setBookmark } from "../controllers/blogController.js";

const router = Router();

//Get All Blogs
router.get("/getBlogs", getAllBlogs);

//Add Blogs
router.post("/create", createBlog);

//Set blog into bookmarks
router.post("/setBookmark", setBookmark);

export default router;
