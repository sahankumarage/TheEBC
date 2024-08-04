import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function BenifitsCard() {
  return (
    <Box  display='flex' justifyContent='center'>
        <Grid container gap={3}>
            <Grid item xs={6}>
                <Typography variant="h3">
                    Hello
                </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h3">
                    Hello
                </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h3">
                    Hello
                </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h3">
                    Hello
                </Typography>
            </Grid>
        </Grid>
    </Box>
  )
}

export default BenifitsCard