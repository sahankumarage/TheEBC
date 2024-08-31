import React from "react";
import Map from "../../Components/Map/Map";
import { Box, Grid } from "@mui/material";

function ContactUs() {
  return (
    <>
      <Grid container mt={8}>
        <Grid item xs={6}>
          <Box display='flex' justifyContent='center'>
            <Map />
          </Box>
        </Grid>
        <Grid item xs={6}>
          Lanka
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
