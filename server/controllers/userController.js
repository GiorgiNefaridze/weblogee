import bcrypt from "bcrypt";

import { generateHashPassword } from "../utils/generateHash.js";

import Users from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (
      !name.trim().length ||
      !email.trim().length ||
      !password.trim().length
    ) {
      throw new Error("All fileds are required");
    }

    if (name.trim().length < 3) {
      throw new Error("Name is too short");
    }

    if (name.trim().length > 10) {
      throw new Error("Name is too long");
    }

    const checkUserInDb = await Users.exists({
      email,
    });

    if (checkUserInDb) {
      throw new Error("This email already exists");
    }

    const hashedPassword = await generateHashPassword(password);

    await new Users({
      name,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).json({ status: "success" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  res.send("Login");
};
