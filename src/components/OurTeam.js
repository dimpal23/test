import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import "../styles/OurTeam.css";
import Avatar from "@mui/material/Avatar";
import AvatarOne from "../assets/avatar1.png";
import AvatarTwo from "../assets/avatar2.png";
import AvatarThree from "../assets/avatar3.png";
import AvatarFour from "../assets/avatar4.png";

const OurTeam = () => {
  return (
    <Grid container>
       <Grid item sx={{ padding: "2rem",display:"flex",justifyContent:"center",alignItems:"center" }} lg={12} xs={12}>
        <PeopleAltIcon className="teamlogo" />
        <Typography sx={{ mt: 2,ml:2,
                  color: "#000048",
                  fontSize: "2rem",
                  mt: 2,
                  fontWeight: "600",
                 }} variant="h3" component="div">
          OUR TEAM
        </Typography>
      </Grid>
      <Grid container item lg={12} sx={{ padding: "2rem" }} spacing={2}>
        <Grid item lg={6} xs={12}>
          <Card className="card">
            <CardContent>
              <Avatar
                alt="Remy Sharp"
                src={AvatarOne}
                sx={{ width: 90, height: 90 }}
              />
              <Typography
                sx={{
                  color: "#000048",
                  fontSize: "1.5rem",
                  mt: 2,
                  fontWeight: "600",
                }}
                variant="h5"
                component="div"
              >
                PR HEAD
              </Typography>
              <Typography>
                IIC TMSL is currently working with 50+ members and 10 students
                co-ordinators. We also have some external members to guide us.
                Under any circumstances the team is there to support you and
                your innovative start-up idea to evolve into a business. We are
                there to help, build and grow a start-up ecosystem with your
                innovations &amp; contributions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Card className="card">
            <CardContent>
              <Avatar
                alt="Remy Sharp"
                src={AvatarTwo}
                sx={{ width: 90, height: 90 }}
              />
              <Typography
                sx={{
                  color: "#000048",
                  fontSize: "1.5rem",
                  mt: 2,
                  fontWeight: "600",
                }}
                variant="h5"
                component="div"
              >
                CONVENAR
              </Typography>
              <Typography>
                IIC TMSL is currently working with 50+ members and 10 students
                co-ordinators. We also have some external members to guide us.
                Under any circumstances the team is there to support you and
                your innovative start-up idea to evolve into a business. We are
                there to help, build and grow a start-up ecosystem with your
                innovations &amp; contributions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Card className="card">
            <CardContent>
              <Avatar
                alt="Remy Sharp"
                src={AvatarThree}
                sx={{ width: 90, height: 90 }}
              />
              <Typography
                sx={{
                  color: "#000048",
                  fontSize: "1.5rem",
                  mt: 2,
                  fontWeight: "600",
                }}
                variant="h5"
                component="div"
              >
                GRAPHICS HEAD
              </Typography>
              <Typography>
                IIC TMSL is currently working with 50+ members and 10 students
                co-ordinators. We also have some external members to guide us.
                Under any circumstances the team is there to support you and
                your innovative start-up idea to evolve into a business. We are
                there to help, build and grow a start-up ecosystem with your
                innovations &amp; contributions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Card className="card">
            <CardContent>
              <Avatar
                alt="Remy Sharp"
                src={AvatarFour}
                sx={{ width: 90, height: 90 }}
              />
              <Typography
                sx={{
                  color: "#000048",
                  fontSize: "1.5rem",
                  mt: 2,
                  fontWeight: "600",
                }}
                variant="h5"
                component="div"
              >
                TECH LEAD
              </Typography>
              <Typography>
                IIC TMSL is currently working with 50+ members and 10 students
                co-ordinators. We also have some external members to guide us.
                Under any circumstances the team is there to support you and
                your innovative start-up idea to evolve into a business. We are
                there to help, build and grow a start-up ecosystem with your
                innovations &amp; contributions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OurTeam;
