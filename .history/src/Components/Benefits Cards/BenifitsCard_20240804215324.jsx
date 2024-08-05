import { Box, Divider, Grid, Typography } from "@mui/material";
import Global from "../../assets/Icon/global.png";
import Speak from "../../assets/Icon/speak.png";
import Travelling from "../../assets/Icon/travel-bag.png";
import Friend from "../../assets/Icon/friends.png";
import React from "react";

function BenifitsCard() {
  return (
    <Box display="flex" justifyContent="center">
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <Card img={Foreignicon} />
        </Grid>
        <Grid item xs={6}>
          <Card img={Speak} />
        </Grid>
        <Grid item xs={6}>
          <Card img={Travelling} />
        </Grid>
        <Grid item xs={6}>
        <Card img={Friend} />
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
        <Grid item xs={8}>
          <Typography variant="h5" color="black" sx={{fontWeight:600}}>
          Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <Divider sx={{ my: 1, width: "75%" }} />
          <Typography variant="h6" color="grey" >
          Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BenifitsCard;
