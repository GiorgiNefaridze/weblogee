import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { MdCloudUpload } from "react-icons/md";

import {
  Create,
  Content,
  BlogTitle,
  Thumbnail,
  Image,
  BlogContent,
  Footer,
} from "./CreateBlog.style";

const CreateBlog: FC = () => {
  const [image, setImage] = useState<ArrayBuffer | string>("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCancel = () => {
    navigate("/");
  };

  const handelChange = (e: React.ChangeEvent) => {
    const { files } = e.target;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      if (reader.result) {
        setImage(reader.result);
      }
    };
  };

  const submitForm = (data: unknown) => {
    console.log(data);
  };

  return (
    <Create onSubmit={handleSubmit(submitForm)}>
      <Content>
        <BlogTitle>
          <h2>Create Blog Title🖋️</h2>
          <p>
            This title will appear on the top of your blog, make it easy for
            others to predict blog content.
          </p>
          <TextField
            {...register("title", {
              required: "Please enter a title",
              minLength: { value: 7, message: "Title is too short" },
            })}
            label="Title here"
            multiline
            maxRows={4}
          />
          {errors?.title?.message && <span>{errors.title.message}</span>}
        </BlogTitle>
        <BlogContent>
          <h2>Blog Content</h2>
          <textarea
            {...register("content", {
              required: "Blog content is required",
              minLength: { value: 10, message: "Content is too short" },
            })}
            placeholder="Blog Content Here"
          />
          {errors?.content?.message && <span>{errors.content.message}</span>}
        </BlogContent>
        <Thumbnail selected={image?.toString().length > 0}>
          <h2>Thumbnail</h2>
          <Image htmlFor="upload" selected={image?.toString().length > 0}>
            <MdCloudUpload
              size={50}
              color={image?.toString().length > 0 ? "green" : 'black'}
            />
            <p>Browse your image here</p>
            <input onChange={handelChange} id="upload" type="file" />
          </Image>
        </Thumbnail>
      </Content>
      <Footer>
        <button onClick={handleCancel}>Cancel</button>
        <button type="submit">Publish</button>
      </Footer>
    </Create>
  );
};

export default CreateBlog;
