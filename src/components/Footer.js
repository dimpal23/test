import { Grid, Typography } from '@mui/material'
import React from 'react';
import FooterLogo from "../assets/Blue@4x.png";

const Footer = () => {
  return (
    <Grid container sx={{background:"black",padding:"1.5rem"}}>
        <Grid item lg={12} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Typography sx={{color:"white",fontSize:"1rem"}}>Contact Us -</Typography>
            <img src={FooterLogo} className="footerlogo" />
        </Grid>

    </Grid>
  )
}

export default Footer