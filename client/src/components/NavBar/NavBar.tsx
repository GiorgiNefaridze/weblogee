import { FC } from "react";
import { FiUserPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import UserAvatar from "./UserAvatar";

import BrandLogo from "../../../public/brand_name.jpg";
import { NavWrapper, UserInfo, CreateBlog } from "./NavBar.style";

const NavBar: FC = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const register = () => {
    navigate("/register");
  };

  return (
    <NavWrapper>
      <img src={BrandLogo} title="weblogee" onClick={() => navigate("/")} />
      <UserInfo>
        {token && (
          <>
            <div>
              <span>name</span>
              {/* <UserAvatar /> */}
            </div>
            <CreateBlog>
              <p>Create</p>
              <span className="material-symbols-outlined">edit_document</span>
            </CreateBlog>
          </>
        )}

        {!token && (
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
