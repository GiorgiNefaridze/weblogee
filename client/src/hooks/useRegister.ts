import { axiosInstance } from "../api/axiosInstance";

import { IForm } from "../components/Register/Register";

export const useRegister = async (userData: IForm) => {
  const { data } = await axiosInstance().post("/api/user/register", userData);

  return data?.status;
};
