import { useState } from "react";
import { isAxiosError } from "axios";

import { IForm } from "../components/Login/Login";
import { axiosInstance } from "../api/axiosInstance";

interface ILogin {
  (userData: IForm): Promise<{
    status: number;
    message: string;
    user: {} | null;
  }>;
}

export const useLogin: ILogin = async (userData) => {
  try {
    const { data } = await axiosInstance().post("/api/user/login", userData);

    if (Object.keys(data).length) {
      localStorage.setItem("token", data?.token);
    }

    const { data: user } = await axiosInstance().post("/api/user/user-data");

    return { status: 200, message: "User logined successfully", user };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: isAxiosError(error) ? error.response?.data.message : null,
      user: null,
    };
  }
};
