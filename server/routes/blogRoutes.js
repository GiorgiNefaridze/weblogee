import { Router } from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const limiter = rateLimit({
  windowMs: 20 * 60 * 1000,
  max: 2,
  message: { error: process.env.REQ_LIMITER },
});

import {
  getAllBlogs,
  createBlog,
  checkBookmarks,
  setBookmarks,
  getBookmarks,
} from "../controllers/blogController.js";

const router = Router();

//Get All Blogs
router.get("/getBlogs", getAllBlogs);

//Add Blogs
router.post("/create", limiter, createBlog);

//Check blog in bookmarks
router.post("/checkBookmarks", checkBookmarks);

//Set bookmarks blogs
router.post("/setBookmarks", setBookmarks);

//Get All Bookmarks
router.get("/getBookmarks", getBookmarks);

export default router;
