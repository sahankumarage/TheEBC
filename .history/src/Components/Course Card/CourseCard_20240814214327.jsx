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
      <Grid container>
        <Grid data-aos="fade-right" item>
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
        <Grid xs={12} item display='flex' justifyContent='center'>
          <Box
            component="img"
            src={img}
            alt="Icon"
            sx={{
              width: "60%",
              height: "auto",
              backgroundColor:"grey"
            }}
            p={6}
            
            
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CourseCard;
