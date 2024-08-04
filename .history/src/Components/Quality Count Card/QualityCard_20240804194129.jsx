import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

function QualityCard() {
  return (
    <Box sx={{backgroundColor:"primary.darker", borderRadius:"20px"}} p={4} >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h2" color="primary.main">
            10 +
          </Typography>
          <Divider sx={{ my: 1, width: "75%" }} />
          <Typography variant="h4" color="grey">
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h2" color="primary.main">
            12 +
          </Typography>
          <Divider sx={{ my: 1, width: "75%" }} />
          <Typography variant="h4" color="white">
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h2" color="primary.main">
            120 +
          </Typography>
          <Divider sx={{ my: 1, width: "75%" }} />
          <Typography variant="h4" color="grey">
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default QualityCard;
