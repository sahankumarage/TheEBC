import React from "react";
import Map from "../../Components/Map/Map";
import { Box, Grid, Typography } from "@mui/material";

function ContactUs() {
  return (
    <>
      <Grid container mt={10}>
        <Grid item xs={6}>
          <Box display='flex' justifyContent='center'>
            <Map />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
