import { Box, Divider, Grid, Typography } from "@mui/material";
import Email from "../../assets/Icon/email.png";
import React, { useEffect } from "react";
import Aos from "aos";

function ContactCard() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Box display="flex" justifyContent="center">
      <Grid container spacing={10}>
        <Grid data-aos="fade-right" item xs={12} >
          <Card img={Email} />
        </Grid>
      </Grid>
    </Box>
  );
}

function Card({ img }) {
  return (
    <Box>
      <Grid container>
        <Grid item xs={1} display='flex' justifyContent='emd' alignContent='center'>
          <Box
            component="img"
            src={img}
            alt="Icon"
            sx={{
              width: "55%",
              height: "60%",
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h5" color="black" sx={{ fontWeight: 600 }}>
            Email
          </Typography>
          <Divider sx={{ my: 1, width: "75%" }} />
          <Typography variant="h6" color="grey">
           info@ieiedu.lk
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactCard;
