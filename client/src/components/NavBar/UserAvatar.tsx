import { useState, FC } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { UserContext } from "../../context/userContext";

const UserAvatar: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { user, setUser } = UserContext();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    setUser({ email: "", name: "", image: null, auth: false });
    localStorage.removeItem("token");
  };

  return (
    <div style={{ position: "relative" }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        {!user?.image?.length ? (
          <AccountCircle style={{ fontSize: "35px" }} />
        ) : (
          <img
            style={{ borderRadius: "50%", width: "35px", height: "35px" }}
            src={user?.image}
          />
        )}
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        style={{ position: "absolute", top: "60px" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={handleLogOut}>Log out</MenuItem>
      </Menu>
    </div>
  );
};

export default UserAvatar;
