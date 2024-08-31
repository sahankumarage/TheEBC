import React from "react";
import Map from "../../Components/Map/Map";
import { Box, Container, Grid } from "@mui/material";

function ContactUs() {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Box>
              <Map />
            </Box>
          </Grid>
          <Grid item xs={6}>
            Lanka
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ContactUs;
