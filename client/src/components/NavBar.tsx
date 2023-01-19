import { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiDocumentAdd } from "react-icons/hi";

import UserAvatar from "./NavBar/UserAvatar";

import BrandLogo from "../../public/brand_name.jpg";
import { NavWrapper, UserInfo, CreateBlog } from "./NavBar/NavBar.style";

const NavBar: FC = () => {
  return (
    <NavWrapper>
      <GiHamburgerMenu cursor="pointer" size={23} />
      <img src={BrandLogo} title="weblogee" />
      <UserInfo>
        <span>name</span>
        <UserAvatar />
        <CreateBlog>
          <p>Create</p>
          <span className="material-symbols-outlined">edit_square</span>
        </CreateBlog>
      </UserInfo>
    </NavWrapper>
  );
};

export default NavBar;
