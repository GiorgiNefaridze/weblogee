import { FC, ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaFileUpload } from "react-icons/fa";

import { emailRegExp } from "../Login/Login";
import { useRegister } from "../../hooks/useRegister";
import FormField from "../FormFields";

import { RegisterWrapper, UploadImage } from "./Register.style";

export interface IForm {
  name: string;
  email: string;
  password: string;
  image: string | ArrayBuffer;
}

const Register: FC = () => {
  const [image, setImage] = useState<string | ArrayBuffer>("");
  const [loader, setLoader] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();

  const submitForm = async (data: IForm) => {
    setLoader(true);
    const { status, message } = await useRegister({ ...data, image });
    setLoader(false);

    if (message?.length > 0 && status === 201) {
      reset({ name: "", email: "", password: "", image: "" });
      toast.success(message);
      setImage("");
      return;
    }

    toast.error(message);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e?.target;

    const reader = new FileReader();
    if (files) {
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        const result = reader?.result;

        if (result) {
          setImage(result);
        }
      };
    }
  };

  return (
    <RegisterWrapper>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormField
          type="text"
          register={{
            ...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Name is too short" },
              maxLength: { value: 15, message: "Name is too long" },
            }),
          }}
          label="Enter your Name"
          error={errors?.name?.message}
        />
        <FormField
          type="email"
          register={{
            ...register("email", {
              required: "Email is required",
              pattern: { value: emailRegExp, message: "Email is not valid" },
            }),
          }}
          label="Enter your email"
          error={errors?.email?.message}
        />
        <FormField
          type="password"
          register={{
            ...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password should includes at least 4 characters",
              },
            }),
          }}
          label="Enter your password"
          error={errors?.password?.message}
        />
        <UploadImage fillWithGreen={image.toString().length > 0}>
          <input
            onChange={handleChange}
            style={{ display: "none" }}
            type="file"
            id="ipload_image"
          />
          <label htmlFor="ipload_image">Upload image</label>
          <FaFileUpload />
        </UploadImage>
        <button type="submit">
          {loader ? (
            <i
              className="fa fa-circle-o-notch fa-spin"
              style={{ fontSize: "20px" }}
            ></i>
          ) : (
            "Register"
          )}
        </button>
      </form>
      <Toaster position="bottom-right" reverseOrder={false} />
    </RegisterWrapper>
  );
};

export default Register;
