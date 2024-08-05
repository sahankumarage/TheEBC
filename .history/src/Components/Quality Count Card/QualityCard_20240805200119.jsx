import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

function AnimatedNumber({ number }) {
  const { number: animatedNumber } = useSpring({
    from: { number: 0 },
    number,
    delay: 200,
    config: { duration: 2000 },
  });

  return (
    <animated.div>
      {animatedNumber.to((n) => n.toFixed(0))}+
    </animated.div>
  );
}

function QualityCard() {
  return (
    <Box sx={{ backgroundColor: "primary.lighter", borderRadius: "20px" }} p={4}>
      <Grid container spacing={2} display="flex" justifyContent="center">
        <Grid item xs={10} sm={8} md={4} lg={4} sx={{ mt: { sm: 3 } }}>
          <Typography variant="h2" color="primary.main">
            <AnimatedNumber number={10} />
          </Typography>
          <Divider sx={{ my: 1, width: "75%" }} />
          <Typography variant="h4" color="grey">
            Lorem ipsum dolor sit.
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} md={4} lg={4} sx={{ mt: { sm: 3 } }}>
          <Typography variant="h2" color="primary.main">
            <AnimatedNumber number={12} />
          </Typography>
          <Divider sx={{ my: 1, width: "75%" }} />
          <Typography variant="h4" color="grey">
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} md={4} lg={4} sx={{ mt: { sm: 3 } }}>
          <Typography variant="h2" color="primary.main">
            <AnimatedNumber number={120} />
          </Typography>
          <Divider sx={{ my: 1, width: "75%" }} />
          <Typography variant="h4" color="grey">
            Lorem ipsum dolor sit consectetur.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default QualityCard;
