import { FC } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { emailRegExp } from "../Login/Login";
import { useRegister } from "../../hooks/useRegister";
import FormField from "../FormFields";

import { RegisterWrapper } from "./Register.style";

export interface IForm {
  name: string;
  email: string;
  password: string;
}

const Register: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const submitForm = async (data: IForm) => {
    const { status, message } = await useRegister(data);

    if (message?.length > 0 && status === 201) {
      toast.success(message);
      return;
    }

    toast.error(message);
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
        <button type="submit">Register</button>
      </form>
      <Toaster position="bottom-right" reverseOrder={false} />
    </RegisterWrapper>
  );
};

export default Register;
