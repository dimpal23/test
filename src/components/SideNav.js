import { Button } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Header.css";

const SideNav = () => {
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <MenuIcon className="menuicon" onClick={handleMenu} />
      {show === true ? (
        <div className="sidebar">
          <Button onClick={handleClose}>X</Button>
          <li>Home</li>
          <li>About</li>
          <li>Events</li>
          <li>Our Team</li>
        </div>
      ) : null}
    </div>
  );
};

export default SideNav;
