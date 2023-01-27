import React, { useState, createContext, useContext, useEffect } from "react";

import { useFetchUser } from "../hooks/useFetchUser";

interface IProps {
  children: React.ReactNode;
}

export interface IUser {
  name: string;
  email: string;
  auth: boolean;
  image?: string | null;
}

interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const userContext = createContext<IUserContext>({} as IUserContext);

export const UserContext = () => {
  return useContext(userContext);
};

export const UserContextProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    image: null,
    auth: false,
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    (async () => {
      if (token) {
        const data = await useFetchUser();
        setUser({ ...data, auth: true });
      }
    })();
  }, [token, user?.email]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
