import cloudinary from "cloudinary";

import { cloudinaryConfigurations } from "../cloudinaryConfig.js";
import { generateHashPassword } from "../utils/generateHash.js";
import { compareHashedPassword } from "../utils/compareHashPassword.js";
import { getValidToken } from "../utils/getValidToken.js";
import { veryfyToken } from "../utils/verifyJWT.js";
import { generateJWT } from "../utils/generateJWT.js";

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
  try {
    const { email, password } = req.body;

    if (email?.trim().length < 1 || password?.trim().length < 1) {
      throw new Error("All fileds are required");
    }

    const user = await Users.findOne({ email });

    const userPassword = await compareHashedPassword(password, user?.password);

    if (email !== user?.email || !userPassword) {
      throw new Error("Information is incorrect");
    }

    if (user && email === user?.email && userPassword) {
      const jwt = generateJWT(user?._id);

      res.status(200).json({ token: jwt });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserData = async (req, res) => {
  try {
    const headers = req.headers;

    const data = getValidToken(headers);

    if (data.length > 1) {
      const userId = veryfyToken(data);

      const user = await Users.findOne({ _id: userId?.id });

      res
        .status(200)
        .json({ email: user.email, name: user.name, image: user.image });
    } else {
      throw new Error("Token is invalid");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
