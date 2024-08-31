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
                    
                    variant="h2"
                    color="primary.lighter"
                    sx={{
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: -8, // Adjust as needed to position the line
                        width: "100%",
                        height: 4, // Height of the line
                        backgroundColor: "primary.main", // Color of the line
                        animation: "lineLoop 2s infinite",
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
