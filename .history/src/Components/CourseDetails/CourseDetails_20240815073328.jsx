import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function CourseDetails() {
  return (
    <Box>
        <Grid container>
            <Grid xs={4} item>
                Title
            </Grid>
            <Grid xs={8} item>
                <Typography variant='h5'>
                    
                </Typography>
            </Grid>
        </Grid>
    </Box>
  )
}

export default CourseDetails