import { Box, Divider, Grid, Typography } from "@mui/material";
import Global from "../../assets/Icon/global.png";
import Speak from "../../assets/Icon/speak.png";
import Travelling from "../../assets/Icon/travel-bag.png";
import Friend from "../../assets/Icon/friends.png";
import React, { useEffect } from "react";
import Aos from "aos";

function CourseCard() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Box display="flex" justifyContent="center">
      <Grid container spacing={10}>
        <Grid data-aos="fade-right" item xs={12} sm={12} md={6} lg={6}>
          <Card img={Global} />
        </Grid>
      </Grid>
    </Box>
  );
}

function Card({ img }) {
  return (
    <Box>
      <Grid container>
        <Grid item xs={3}>
          <Box
            component="img"
            src={img}
            alt="Icon"
            sx={{
              width: "80%",
              height: "auto",
            }}
          />
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default CourseCard;
