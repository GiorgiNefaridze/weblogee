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
      blogs = await Blogs.find({}).skip(page).limit(5);
    } else {
      blogs = await Blogs.find({}).skip(0).limit(5);
    }

    const data = await fetchUser(blogs);

    if (data == "undefind" || data?.length < 1) {
      throw new Error("Blog not found.Try with different keywords");
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
