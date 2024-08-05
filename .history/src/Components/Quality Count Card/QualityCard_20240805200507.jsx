import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

function QualityCard() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Box
      sx={{ backgroundColor: "primary.lighter", borderRadius: "20px" }}
      p={4}
      data-aos="fade-up"
    >
      <Grid container spacing={2} display="flex" justifyContent="center">
        <Grid item xs={10} sm={8} md={4} lg={4} sx={{ mt: { sm: 3 } }}>
          <Typography variant="h2" color="primary.main">
            <CountUp end={10} duration={5} />+
          </Typography>
          <Divider sx={{ my: 1, width: "75%" }} />
          <Typography variant="h4" color="grey">
            Lorem ipsum dolor sit .
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} md={4} lg={4} sx={{ mt: { sm: 3 } }}>
          <Typography variant="h2" color="primary.main">
            <CountUp end={12} duration={5} />+
          </Typography>
          <Divider sx={{ my: 1, width: "75%" }} />
          <Typography variant="h4" color="grey">
            Lorem ipsum dolor sit amet consectetur .
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} md={4} lg={4} sx={{ mt: { sm: 3 } }}>
          <Typography variant="h2" color="primary.main">
            <CountUp end={120} duration={5} />+
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
