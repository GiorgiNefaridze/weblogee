import { Schema, model } from "mongoose";

const blogSchema = new Schema({
  author: { type: Schema.Types.ObjectId },
  title: { type: String, required: true },
  content: { type: String, required: true },
  categories: { type: String },
  image: { type: String },
});

export default model("blogs", blogSchema);
