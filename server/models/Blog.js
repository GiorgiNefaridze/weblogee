import { Schema, model } from "mongoose";

const blogSchema = new Schema({
  author: { type: Schema.Types.ObjectId },
  title: { type: String, required: true },
  content: { type: String, required: true },
  categories: { type: [String], required: true },
  image: { type: String },
  date: { type: Date, default: new Date(), required: true },
});

export default model("blogs", blogSchema);
