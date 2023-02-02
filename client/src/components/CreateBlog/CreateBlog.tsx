import React, { FC, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
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

import { axiosInstance } from "../../api/axiosInstance";
import { Categories, CategoriesWrapper } from "../Filtering/Filtering.style";

const CreateBlog: FC = () => {
  const [image, setImage] = useState<ArrayBuffer | string>("");
  const [category, setCategory] = useState<string[]>([
    "design",
    "development",
    "devops",
    "UI/UX",
    "marketing",
  ]);
  const [selectCategory, setSelectCategory] = useState<string[]>([]);
  const [categoryError, setCategoryError] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
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

  const submitForm = async (data: any) => {
    if (selectCategory.length) {
      try {
        const { data: Data } = await axiosInstance().post("/api/blogs/create", {
          ...data,
          image,
          selectCategory,
        });

        if (Data?.response) {
          toast.success(Data?.response);
          setSelectCategory([]);
          setImage("");
          reset({ title: "", content: "" });
        }
      } catch (error) {
        toast.error(error?.response?.data?.error);
      }
    } else {
      setCategoryError(true);
    }
  };

  const handleClick = (category: string) => {
    setCategoryError(false);
    if (selectCategory.includes(category)) {
      setSelectCategory((prev) => prev?.filter((cat) => cat !== category));
    } else {
      setSelectCategory([...selectCategory, category]);
    }
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
              color={image?.toString().length > 0 ? "green" : "black"}
            />
            <p>Browse your image here</p>
            <input onChange={handelChange} id="upload" type="file" />
          </Image>
        </Thumbnail>
        <CategoriesWrapper>
          {category?.map((category, idx) => (
            <Categories
              key={idx}
              onClick={() => handleClick(category)}
              select={selectCategory.includes(category)}
            >
              <p
                style={{ fontWeight: "bold", fontFamily: "Roboto" }}
                title={category}
              >
                {category}
              </p>
            </Categories>
          ))}
        </CategoriesWrapper>
        {categoryError && (
          <span style={{ color: "red", fontWeight: "bold" }}>
            Select category
          </span>
        )}
      </Content>
      <Footer>
        <button onClick={handleCancel}>Cancel</button>
        <button type="submit">Publish</button>
      </Footer>
      <Toaster position="bottom-right" />
    </Create>
  );
};

export default CreateBlog;
