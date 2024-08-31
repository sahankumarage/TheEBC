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
              color="black"
              variant="h3"
              sx={{
                fontWeight: "600",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: { lg: "-70px", md: "-65px", sm: "-50px", xs: "-30px" },
                  bottom: "-15px",
                  width: "50%",
                  height: "20px",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='20 0 200 5' preserveAspectRatio='none'%3E%3Cpath d='M0,12 Q400,9 150,5 T200,9 T300,5' stroke='%230000FF' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                },
              }}
            >
             Message Us
              
            </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
