import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import CountUp from 'react-countup';

function QualityCard() {
  return (
    <Box sx={{backgroundColor:"primary.lighter", borderRadius:"20px"}} p={4} >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h2" color="primary.dark">
            <CountUp end={10} duration={2.5} />+
          </Typography>
          <Divider sx={{ my: 1, width: "75%" }} />
          <Typography variant="h4" color="white">
            Lorem ipsum dolor sit .
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h2" color="primary.main">
            <CountUp end={12} duration={2.5} />+
          </Typography>
          <Divider sx={{ my: 1, width: "75%" }} />
          <Typography variant="h4" color="white">
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h2" color="primary.main">
            <CountUp end={120} duration={2.5} />+
          </Typography>
          <Divider sx={{ my: 1, width: "75%" }} />
          <Typography variant="h4" color="white">
            Lorem ipsum dolor sit  consectetur.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default QualityCard;