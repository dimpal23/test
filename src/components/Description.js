import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import CardoneLogo from "../assets/card1.png";
import CradtwoLogo from "../assets/card2.jpg";
import cardthreeLogo from "../assets/crad3.jpg";
import cardfourLogo from "../assets/card4.jpg";
import "../styles/Description.css";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Description = () => {
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
        md={12}
      >
        <EmojiEventsIcon className="teamlogo" />
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
          OUR Events
        </Typography>
      </Grid>
      <Grid
        container
        item
        lg={12}
        xs={12}
        sm={12}
        md={12}
        rowGap={2}
        columnGap={3}
        sx={{ padding: "2rem", mt: 5 }}
      >
        <Card className="cardbackground" sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 170 }}
            image={CardoneLogo}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              THANKS FOR VISTING US
            </Typography>
            <Typography sx={{ mt: 3 }} variant="h7" component="div">
              IIC TMSL is currently working with 50+ members and 10 students
              co-ordinators. We also have some external members to guide us.
              Under any circumstances the team is there to support you and your
              innovative start-up idea to evolve into a business. We are there
              to help, build and grow a start-up ecosystem with your innovations
              &amp; contributions.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="cardbackground">
          <CardMedia
            sx={{ height: 170 }}
            image={CradtwoLogo}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              DOODLE SELECTION DRIVE
            </Typography>
            <Typography sx={{ mt: 3 }} variant="h7" component="div">
              IIC TMSL is currently working with 50+ members and 10 students
              co-ordinators. We also have some external members to guide us.
              Under any circumstances the team is there to support you and your
              innovative start-up idea to evolve into a business. We are there
              to help, build and grow a start-up ecosystem with your innovations
              &amp; contributions.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="cardbackground">
          <CardMedia
            sx={{ height: 170 }}
            image={cardthreeLogo}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              TEAM EDLOX
            </Typography>
            <Typography sx={{ mt: 3 }} variant="h7" component="div">
              IIC TMSL is currently working with 50+ members and 10 students
              co-ordinators. We also have some external members to guide us.
              Under any circumstances the team is there to support you and your
              innovative start-up idea to evolve into a business. We are there
              to help, build and grow a start-up ecosystem with your innovations
              &amp; contributions.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="cardbackground">
          <CardMedia
            sx={{ height: 170 }}
            image={cardfourLogo}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              FILANTHROPIA
            </Typography>
            <Typography sx={{ mt: 3 }} variant="h7" component="div">
              IIC TMSL is currently working with 50+ members and 10 students
              co-ordinators. We also have some external members to guide us.
              Under any circumstances the team is there to support you and your
              innovative start-up idea to evolve into a business. We are there
              to help, build and grow a start-up ecosystem with your innovations
              &amp; contributions.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Description;
