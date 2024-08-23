import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

function CourseDetails({ img }) {
  return (
    <Box>
      <Grid container>
        <Grid xs={4} item display="flex" justifyContent="center">
          <Box
            component="img"
            src={img}
            alt="IMG"
            sx={{
              width: "auto",
              height: {
                xs: "55vh",
                sm: "35vh",
                md: "45vh",
                lg: "60vh",
              },
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid xs={8} item>
          <Typography variant="h5" color="black" sx={{ fontWeight: 600 }}>
            Lorem ipsum dolor sit amet consectetur .
          </Typography>
          <Divider sx={{ my: 1, width: "75%" }} />
          <Typography variant="h6" color="grey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores
            ipsa nobis nam nemo saepe delectus, voluptates laudantium cum,
            assumenda porro? Saepe tempore sint animi. Distinctio quidem
            dignissimos fuga libero. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem maiores ipsa dignissimos fuga libero. animi.
            Distinctio quidem dignissimos fuga libero. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Rem maiores ipsa nobis nam nemo
            saepe delectus, voluptates laudantium cum, assumenda porro? Saepe
            tempore sint animi. Distinctio quidem dignissimos fuga libero.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CourseDetails;
