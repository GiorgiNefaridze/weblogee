import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import users from "./routes/userRoutes.js";
import blogs from "./routes/blogRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successfuly"))
  .catch(() => console.log("Something went wrong"));

const app = express();
const port = process.env.PORT || 3001;

//middlewares
app.use(cors());
app.use(bodyParser({ limit: "10mb" }));
app.use(express.json());

app.use("/api/user", users);
app.use("/api/blogs", blogs);

app.listen(port, () => console.log("listening on port " + port));
