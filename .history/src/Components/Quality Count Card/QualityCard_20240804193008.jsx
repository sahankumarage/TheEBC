import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function QualityCard() {
  return (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={4} >
                <Typography variant="h5" color=>
                    500 +
                </Typography>
            </Grid>
            <Grid item xs={4}>
                Hello
            </Grid>
            <Grid item xs={4}>
                Hello
            </Grid>
        </Grid>
    </Box>
  )
}

export default QualityCard