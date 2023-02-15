import { Grid } from "@mui/material";
import React from "react";
import Logo from "../assets/IIC.png";
import "../styles/Header.css";
import SideNav from "./SideNav";

const Header = () => {
  return (
    <Grid container sx={{ padding: "2rem" }}>
      <Grid item xs={10} sm={8} md={4} lg={2}>
        <img src={Logo} className="logo" />
      </Grid>
      <Grid
        item
        xs={2}
        sm={4}
        md={6}
        lg={10}
        sx={{
          display: "flex",
          alignItems: "cenmter",
          justifyContent: "flex-end",
        }}
      >
        <SideNav/>
      </Grid>
    </Grid>
  );
};

export default Header;
