import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, uniqe: true },
  password: { type: String, required: true },
  bookmarkedBlogs: { type: [String], default: [] },
  image: { type: String },
});

export default model("users", userSchema);
