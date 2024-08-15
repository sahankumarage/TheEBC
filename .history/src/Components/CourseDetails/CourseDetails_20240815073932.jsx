import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function CourseDetails({img}) {
  return (
    <Box>
        <Grid container>
            <Grid xs={3} item dis>
            <Box
            component="img"
            src={img}
            alt="Icon"
            sx={{
              width: "80%",
              height: "auto",
            }}
          />
            </Grid>
            <Grid xs={9} item>
                <Typography variant='h5'>
                    Title
                </Typography>
                <Typography variant='h5'>
                    Title
                </Typography>
            </Grid>
        </Grid>
    </Box>
  )
}

export default CourseDetails