import { isAxiosError } from "axios";

import { axiosInstance } from "../api/axiosInstance";
import { IForm } from "../components/Register/Register";

interface IRegister {
  (userData: IForm): Promise<{ message: string; status: number }>;
}

export const useRegister: IRegister = async (userData) => {
  try {
    const { data } = await axiosInstance().post("/api/user/register", userData);

    return { message: data?.status, status: 201 };
  } catch (err) {
    return {
      message: isAxiosError(err) ? err?.response?.data.message : null,
      status: 500,
    };
  }
};
