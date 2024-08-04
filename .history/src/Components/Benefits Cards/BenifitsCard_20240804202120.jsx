import { Box, Grid, Typography } from '@mui/material'
import Foreignicon from '../'
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
                <Grid item xs={3}>
                <Box
                    component="img"
                    src={}
                    alt="Icon"
                    sx={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                Lorem ipsum dolor sit amet
                </Grid>
            </Grid>
        </Box>
    )
}

export default BenifitsCard