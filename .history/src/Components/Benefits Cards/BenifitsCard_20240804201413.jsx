import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function BenifitsCard() {
  return (
    <Box  display='flex' justifyContent='center'>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Card />
                
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

function Card(){
    return (
        <Box>
            <Grid container>
                <Grid item xs={4}>
                    
                </Grid>
                <Grid item>

                </Grid>
            </Grid>
        </Box>
    )
}

export default BenifitsCard