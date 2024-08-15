import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function CourseFee() {
  return (
    <Box>
      <Grid container gap={1}>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          sx={{ backgroundColor: "#D9D9D9" }}
        >
          <Typography variant="h4" color="black" sx={{ fontWeight: 600 }}>
            Course Fee
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          sx={{ backgroundColor: "#D9D9D9" }}
        >
          <Box sx={{
            
          }}>
            <Typography variant="h4" color="black" sx={{ fontWeight: 600 }}>
              Rs.49000/=
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CourseFee;
