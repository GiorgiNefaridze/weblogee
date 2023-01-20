import { useForm } from "react-hook-form";

import FormField from "../FormFields";

import { LoginWrapper } from "./Login.style";

interface IForm {
  email: string;
  password: string;
}

export const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const submitForm = (data: IForm) => {
    console.log(data);
  };

  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormField
          type="text"
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
        <button type="submit">Login</button>
      </form>
    </LoginWrapper>
  );
};

export default Login;
