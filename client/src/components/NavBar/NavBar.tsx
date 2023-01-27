import { FC } from "react";
import { FiUserPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import UserAvatar from "./UserAvatar";
import { UserContext } from "../../context/userContext";

import BrandLogo from "../../../public/brand_name.jpg";
import { NavWrapper, UserInfo, CreateBlog } from "./NavBar.style";

const NavBar: FC = () => {
  const { user } = UserContext();

  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const register = () => {
    navigate("/register");
  };

  const createBlog = async () => {};

  return (
    <NavWrapper>
      <img src={BrandLogo} title="weblogee" onClick={() => navigate("/")} />
      <UserInfo>
        {user?.auth && (
          <>
            <div>
              <span>{user?.name}</span>
              <UserAvatar />
            </div>
            <CreateBlog onClick={createBlog}>
              <p>Create</p>
              <span className="material-symbols-outlined">edit_document</span>
            </CreateBlog>
          </>
        )}

        {!user?.auth && (
          <>
            <CreateBlog onClick={login}>
              <p>Login</p>
              <span className="material-symbols-outlined">login</span>
            </CreateBlog>
            <CreateBlog onClick={register}>
              <p>Register</p>
              <FiUserPlus />
            </CreateBlog>
          </>
        )}
      </UserInfo>
    </NavWrapper>
  );
};

export default NavBar;
