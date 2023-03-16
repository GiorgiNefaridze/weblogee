import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import FormField from "../FormFields";
import { useLogin } from "../../hooks/useLogin";
import { UserContext } from "../../context/userContext";

import { LoginWrapper } from "./Login.style";

export interface IForm {
  email: string;
  password: string;
}

export const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const Login: FC = () => {
  const [loader, setLoader] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const navigate = useNavigate();

  const { setUser } = UserContext();

  const submitForm = async (data: IForm) => {
    setLoader(true);
    const { status, message, user } = await useLogin(data);
    setLoader(false);

    if (status === 500 && message?.length) {
      toast.error(message);
      return;
    }

    if (user && Object.keys(user)?.length) {
      setUser({ ...user, auth: true });
    }

    navigate("/");
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
        <button type="submit">
          {loader ? (
            <i
              className="fa fa-circle-o-notch fa-spin"
              style={{ fontSize: "20px" }}
            ></i>
          ) : (
            "Login"
          )}
        </button>
      </form>
      <Toaster position="bottom-right" />
    </LoginWrapper>
  );
};

export default Login;
