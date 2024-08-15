import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function CourseFee() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} display='flex' justifyContent='center' ba>
          <Typography variant="h4" color="black" sx={{ fontWeight: 600 }}>
           Course Fee
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CourseFee;
