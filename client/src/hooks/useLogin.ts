import { isAxiosError } from "axios";

import { IForm } from "../components/Login/Login";
import { axiosInstance } from "../api/axiosInstance";

interface ILogin {
  (userData: IForm): Promise<{ status: number; message: string }>;
}

export const useLogin: ILogin = async (userData) => {
  try {
    const { data } = await axiosInstance().post("/api/user/login", userData);

    if (Object.keys(data).length) {
      localStorage.setItem("token", data?.token);
    }

    return { status: 200, message: "User logined successfully" };
  } catch (error) {
    return {
      status: 500,
      message: isAxiosError(error) ? error.response?.data.message : null,
    };
  }
};
