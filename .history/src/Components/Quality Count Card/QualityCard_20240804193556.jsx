import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

function QualityCard() {
  return (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={4} >
                <Typography variant="h2" color="primary.main">
                    500 +
                </Typography>
                <Divider sx={{ my: 1, width:"75%",  }} />
                <Typography variant="h3" color="grey">
                    500 +
                </Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography variant="h2" color="primary.main">
                    300 +
                </Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography variant="h2" color="primary.main">
                    200 +
                </Typography>
            </Grid>
        </Grid>
    </Box>
  )
}

export default QualityCard