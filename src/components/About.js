import { Grid, Typography } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AdjustIcon from "@mui/icons-material/Adjust";
import "../styles/About.css";

const About = () => {
  return (
    <Grid container>
      <Grid
        item
        sx={{
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        lg={12}
        xs={12}
      >
        <InfoIcon className="teamlogo" />
        <Typography
          sx={{
            mt: 2,
            ml: 2,
            color: "#000048",
            fontSize: "2rem",
            mt: 2,
            fontWeight: "600",
          }}
          variant="h3"
          component="div"
        >
          ABOUT US
        </Typography>
      </Grid>
      <Grid container sx={{ padding: "2rem" }}>
        <Grid
          item
          lg={4}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AssessmentIcon className="aboutlogo"/>
          <Typography sx={{ mt: 3,color:"#000048",fontSize:"1rem",fontWeight:"500" }} variant="h7" component="div">
            Inspired by the objectives and vision of IIC, a MHRD initiative, we
            have established IIC TMSL. This cell will be conducting various
            innovation and entrepreneurship related activities along with
            organizing periodic workshops, seminars and interactions with
            entrepreneurs and innovators. Students will get a chance to showcase
            their talents by participating in various events like Hackathons,
            idea competitions etc.
          </Typography>
        </Grid>
        <Grid
          item
          lg={4}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AdjustIcon className="aboutlogo" />
          <Typography sx={{ mt: 3,color:"#000048",fontSize:"1rem",fontWeight:"500" }} variant="h7" component="div">
            Inspired by the objectives and vision of IIC, a MHRD initiative, we
            have established IIC TMSL. This cell will be conducting various
            innovation and entrepreneurship related activities along with
            organizing periodic workshops, seminars and interactions with
            entrepreneurs and innovators. Students will get a chance to showcase
            their talents by participating in various events like Hackathons,
            idea competitions etc.
          </Typography>
        </Grid>
        <Grid
          item
          lg={4}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AssignmentIndIcon className="aboutlogo" />
          <Typography sx={{ mt: 3 ,color:"#000048",fontSize:"1rem",fontWeight:"500"}} variant="h7" component="div">
            Inspired by the objectives and vision of IIC, a MHRD initiative, we
            have established IIC TMSL. This cell will be conducting various
            innovation and entrepreneurship related activities along with
            organizing periodic workshops, seminars and interactions with
            entrepreneurs and innovators. Students will get a chance to showcase
            their talents by participating in various events like Hackathons,
            idea competitions etc.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
