import { FC } from "react";
import { useForm } from "react-hook-form";

import { emailRegExp } from "../Login/Login";
import FormField from "../FormFields";

import { RegisterWrapper } from "./Register.style";

interface IForm {
  userName: string;
  email: string;
  password: string;
}

const Register: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const submitForm = (data: IForm) => {
    console.log(data);
  };

  return (
    <RegisterWrapper>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormField
          type="text"
          register={{
            ...register("userName", {
              required: "Name is required",
              minLength: { value: 3, message: "Name is too short" },
              maxLength: { value: 15, message: "Name is too long" },
            }),
          }}
          label="Enter your Name"
          error={errors?.userName?.message}
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
    </RegisterWrapper>
  );
};

export default Register;
