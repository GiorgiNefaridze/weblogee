import React, { useState, createContext, useContext } from "react";

interface IProps {
  children: React.ReactNode;
}

export interface IUser {
  name: string;
  email: string;
  image?: string | null;
}

interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const userContexts = createContext<IUserContext>({} as IUserContext);

export const UserContext = () => {
  return useContext(userContexts);
};

export const UserContextProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  return (
    <userContexts.Provider value={{ user, setUser }}>
      {children}
    </userContexts.Provider>
  );
};
