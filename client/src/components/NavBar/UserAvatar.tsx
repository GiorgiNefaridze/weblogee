import { useState, FC } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { UserContext } from "../../context/userContext";

const UserAvatar: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { user } = UserContext();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
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
          <AccountCircle style={{ fontSize: "30px" }} />
        ) : (
          <img
            style={{ borderRadius: "50%", width: "30px", height: "30px" }}
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
        <MenuItem>Log out</MenuItem>
      </Menu>
    </div>
  );
};

export default UserAvatar;
