import cloudinary from "cloudinary";

import Blogs from "../models/Blog.js";
import User from "../models/User.js";

import { veryfyToken } from "../utils/verifyJWT.js";
import { getValidToken } from "../utils/getValidToken.js";
import { cloudinaryConfigurations } from "../cloudinaryConfig.js";

cloudinaryConfigurations();

export const getAllBlogs = async (req, res) => {
  try {
    const { categories, key } = req.query;

    let Blog;

    const blogs = await Blogs.find({});

    if (categories === "null") {
      Blog = blogs;
    }

    if (categories.length > 0 && categories !== "null") {
      Blog = blogs?.filter((blog) => {
        return categories
          .split(",")
          .every((category) => blog.categories.includes(category));
      });
    }

    const fetchUser = async () => {
      const blogDetails = [];

      for (let blog of Blog) {
        const user = await User.findOne({
          _id: blog?.author.toString().split("(")[0],
        }).lean();

        const { name, image: avatar } = user;
        const { title, content, categories, image } = blog;

        blogDetails.push({ name, avatar, title, content, categories, image });
      }

      return blogDetails;
    };

    const result = await fetchUser();

    res.status(200).json({ response: result });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, content, image, categories } = req.body;
    const headers = req.headers;

    if (title?.trim().length <= 0 && content?.trim().length <= 0) {
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
