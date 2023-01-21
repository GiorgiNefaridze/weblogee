import cloudinary from "cloudinary";

import { generateHashPassword } from "../utils/generateHash.js";
import { cloudinaryConfigurations } from "../cloudinaryConfig.js";

import Users from "../models/User.js";

cloudinaryConfigurations();

export const register = async (req, res) => {
  try {
    const { name, email, password, image } = req.body;

    let imageUrl = "";

    if (
      name?.trim().length < 1 ||
      email?.trim().length < 1 ||
      password?.trim().length < 1
    ) {
      throw new Error("All fileds are required");
    }

    if (name?.trim().length < 3) {
      throw new Error("Name is too short");
    }

    if (name?.trim().length > 15) {
      throw new Error("Name is too long");
    }

    const checkUserInDb = await Users.exists({
      email,
    });

    if (checkUserInDb) {
      throw new Error("This email already exists");
    }

    const hashedPassword = await generateHashPassword(password);

    if (image.length > 0) {
      imageUrl = (
        await cloudinary.uploader.upload(image, {
          public_id: email,
        })
      ).secure_url;
    }

    await new Users({
      name,
      email,
      password: hashedPassword,
      image: imageUrl,
    }).save();

    res.status(201).json({ status: "User created successfully" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  res.send("Login");
};
