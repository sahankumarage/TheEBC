import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

function CourseDetails({ img }) {
  return (
    <Box>
      <Grid container>
        <Grid xs={3} item display="flex" justifyContent="center">
          <Box
            component="img"
            src={img}
            alt="Icon"
            sx={{
              width: "80%",
              height: "auto",
              borderRadius:2
            }}
          />
        </Grid>
        <Grid xs={9} item>
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
