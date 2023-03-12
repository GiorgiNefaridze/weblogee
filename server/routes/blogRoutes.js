import { Router } from "express";

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
router.post("/create", createBlog);

//Check blog in bookmarks
router.post("/checkBookmarks", checkBookmarks);

//Set bookmarks blogs
router.post("/setBookmarks", setBookmarks);

//Get All Bookmarks
router.get("/getBookmarks", getBookmarks);

export default router;
