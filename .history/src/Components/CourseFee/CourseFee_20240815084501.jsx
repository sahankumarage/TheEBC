import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function CourseFee() {
  return (
    <Box>
      <Grid container gap={1} sx={{ backgroundColor: "#D9D9D9", borderRadius:2 }} p={3}>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          
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
            backgroundColor:"primary.darker",
            width:'40%',
            display:'grid',
            justifyContent:'center',
            padding:1,
            borderRadius:2,
            gap:1
          }}>
            
            {/* <Typography variant="h4" color="white" sx={{ fontWeight: 200,  textDecoration: 'line-through' }}>
              Rs.79000/=
            </Typography> */}
            <Typography variant="h5" color="white" sx={{ fontWeight: 600 }}>
              Rs.49000/=
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CourseFee;
