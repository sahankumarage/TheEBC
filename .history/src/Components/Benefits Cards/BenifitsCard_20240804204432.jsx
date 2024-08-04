import { Box, Grid, Typography } from "@mui/material";
import Foreignicon from "../../assets/Icon/cooperations.png";
import Speak from "../../assets/Icon/speak.png";
import Travelling from "../../assets/Icon/travel-bag.png";
import React from "react";

function BenifitsCard() {
  return (
    <Box display="flex" justifyContent="center">
      <Grid container spacing={2}>
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
        <Card img={Speak} />
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
          Lorem ipsum dolor sit amet
        </Grid>
      </Grid>
    </Box>
  );
}

export default BenifitsCard;
