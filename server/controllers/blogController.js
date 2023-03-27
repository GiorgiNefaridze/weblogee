import cloudinary from "cloudinary";

import Blogs from "../models/Blog.js";
import User from "../models/User.js";

import { veryfyToken } from "../utils/verifyJWT.js";
import { getValidToken } from "../utils/getValidToken.js";
import { cloudinaryConfigurations } from "../cloudinaryConfig.js";
import { fetchUser } from "../utils/fetchUser.js";

cloudinaryConfigurations();

export const getAllBlogs = async (req, res) => {
  try {
    const { page } = req.query;

    let blogs;

    if (page > 0) {
      blogs = await Blogs.find({}).skip(page).limit(5).sort({ date: -1 });
    } else {
      blogs = await Blogs.find({}).skip(0).limit(5).sort({ date: -1 });
    }

    const data = await fetchUser(blogs);

    if (data == "undefind" || data?.length < 1) {
      throw new Error("Blog not found.Try with different keywords...");
    }

    res.status(200).json({ response: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, content, image, categories } = req.body;
    const headers = req.headers;

    if (title?.trim()?.length <= 0 && content?.trim()?.length <= 0) {
      throw new Error("All fields are required");
    }

    const token = getValidToken(headers);

    if (token?.length > 0) {
      const userId = veryfyToken(token);

      const findUser = await User.exists({ _id: userId?.id });

      if (!findUser) {
        res.status(404).json({ response: "User not found" });
      }

      if (findUser) {
        let imageUrl = "";

        if (image.toString().trim().length > 0) {
          imageUrl = (
            await cloudinary.uploader.upload(image, {
              public_id: title.trim(),
            })
          )?.secure_url;
        }

        await new Blogs({
          author: userId?.id,
          title,
          content,
          categories,
          image: imageUrl,
        }).save();
      }
    } else {
      res.json(413).json({ response: "Unauthorized user" });
    }

    res.status(201).json({ response: "Blog created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const checkBookmarks = async (req, res) => {
  try {
    const { blog_id } = req.body;
    const header = req.headers;

    const token = getValidToken(header);
    const verifyToken = veryfyToken(token);

    if (verifyToken?.id?.length > 0) {
      const user = await User.findOne({ _id: verifyToken.id });

      if (user.bookmarkedBlogs.includes(blog_id)) {
        res.status(200).json({ status: 200 });
      } else {
        res.status(200).json({ status: 500 });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const setBookmarks = async (req, res) => {
  try {
    const { blog_id } = req.body;
    const header = req.headers;

    const token = getValidToken(header);
    const verifyToken = veryfyToken(token);

    if (verifyToken?.id?.length > 0) {
      const user = await User.findOne({ _id: verifyToken.id });

      if (user.bookmarkedBlogs.includes(blog_id)) {
        const filteredBlogs = user?.bookmarkedBlogs?.filter(
          (id) => id !== blog_id
        );

        await User.findByIdAndUpdate(user.id, {
          bookmarkedBlogs: filteredBlogs,
        });
        res.status(200).json({ status: 200 });
        return;
      } else {
        await User.findByIdAndUpdate(user.id, {
          bookmarkedBlogs: [...user.bookmarkedBlogs, blog_id],
        });
        res.status(201).json({ status: 201 });
        return;
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBookmarks = async (req, res) => {
  try {
    const header = req.headers;

    const token = getValidToken(header);
    const verifyToken = veryfyToken(token);

    const blogs = [];

    if (verifyToken?.id.length > 0) {
      const user = await User.findOne({ _id: verifyToken?.id });

      if (user?.bookmarkedBlogs?.length > 0) {
        for (let blog_id of user?.bookmarkedBlogs) {
          const blog = await Blogs.findOne({
            _id: blog_id,
          }).lean();

          const userId = blog?.author.toString().split('("');

          const userDetail = await User.findOne({
            _id: userId,
          }).lean();

          blogs.push({
            ...blog,
            name: userDetail?.name,
            image: blog?.image,
            avatar: userDetail?.image,
          });
        }
      } else {
        throw new Error("There Is No Bookmarked Blogs");
      }
    }
    res.status(200).json({ response: blogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
