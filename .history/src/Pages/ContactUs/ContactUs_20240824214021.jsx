import React from "react";
import Map from "../../Components/Map/Map";
import { Grid } from "@mui/material";

function ContactUs() {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Map />
        </Grid>
        <Grid item xs={6}>
          Lanka
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
