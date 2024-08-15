import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Image1 from "../../assets/Images/tim-mossholder-hOF1bWoet_Q-unsplash.jpg";

const homeSlides = [{ title: "Course", img: Image1 }];

function Course() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", sm: "65vh", md: "75vh", lg: "80vh" },
          overflow: "hidden",
        }}
      >
        <Carousel animation="fade" interval={5000} indicators={false}>
          {homeSlides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                height: { xs: "60vh", sm: "65vh", md: "75vh", lg: "80vh" },
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `
                    linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%),
                    url(${slide.img})
                    `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 3,
                  width: "100%",
                  textAlign: "start",
                  padding: "0 16px",
                  "@keyframes lineLoop": {
                    "0%": {
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                    },
                    "50%": {
                      transform: "scaleX(0.3)",
                      transformOrigin: "left",
                    },
                    "100%": {
                      transform: "scaleX(0)",
                      transformOrigin: "right",
                    },
                  },
                }}
              >
                <Grid container>
                  <Grid item xs={4} data-aos="fade-right">
                    <Typography
                      variant="h2"
                      color="primary.lighter"
                      sx={{
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          bottom: -8, // Adjust as needed to position the line
                          width: "100%",
                          height: 4, // Height of the line
                          backgroundColor: "primary.main", // Color of the line
                          animation: "lineLoop 2s infinite",
                        },
                      }}
                    >
                      {slide.title}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
}

export default Course;
