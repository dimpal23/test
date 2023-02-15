import { Grid } from '@mui/material';
import React from 'react';
import LogoCounter from "../assets/iic2.png";
import "../styles/About.css";

const LogoComponent = () => {
  return (
    <Grid container item lg={12} xs={12} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={LogoCounter} className="lastlogo" />
    </Grid>
  )
}

export default LogoComponent