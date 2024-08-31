import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Image1 from "../../assets/Images/excited-teen-girl-showing-tablet-boyfriend.jpg";
import Image2 from "../../assets/Images/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking.jpg";
import Image3 from "../../assets/Images/woman-home-using-laptop.jpg";
import Image4 from "../../assets/Images/andrew-neel-QLqNalPe0RA-unsplash.jpg";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import Collage from "../../Components/Collage/Collage";

const homeSlides = [
  { title: "About Us", img: Image1 },
  { title: "About Us", img: Image2 },
  { title: "About Us", img: Image3 },
  { title: "About Us", img: Image4 },
];

function AboutUs() {
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
                      transform: "scaleX(0.5)",
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
      <Container maxWidth="xl">
        <Grid
          container
          spacing={5}
          mt={3}
          sx={{
            marginTop: { xs: "16px", sm: "24px", md: "32px" }, // Responsive margin-top
            backgroundColor: "primary.lighter", // Optional: Background color
            borderRadius: "20px", // Optional: Rounded corners
          }}
          p={2}
        >
          <Grid
            data-aos="fade-up"
            item
            xs={12}
            md={12}
            lg={6}
            mt={1}
            sm={12}
            p={2}
            textAlign="start"
            justifyContent="start"
            display="flex"
          >
            <Carousel
              animation="fade"
              interval={3000}
              indicators={false}
              sx={{ width: "100%", height: "100%" }}
            >
              {homeSlides.map((slide, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "auto",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={slide?.img}
                    alt={slide.title}
                    sx={{
                      width: "auto",
                      height: {
                        xs: "55vh",
                        sm: "35vh",
                        md: "45vh",
                        lg: "60vh",
                      },
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Carousel>
          </Grid>
          <Grid
            data-aos="fade-up"
            item
            mt={2}
            xs={12}
            md={12}
            sm={12}
            lg={6}
            p={2}
            textAlign="start"
            justifyContent="start"
            display="flex"
          >
            <Typography color="#757575" variant="h5" sx={{ fontWeight: "600" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              maiores ipsa nobis nam nemo saepe delectus, voluptates laudantium
              cum, assumenda porro? Saepe tempore sint animi. Distinctio quidem
              dignissimos fuga libero. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem maiores ipsa nobis nam nemo saepe delectus,
              voluptates laudantium cum, assumenda porro? Saepe tempore sint
              animi. Distinctio quidem dignissimos fuga libero. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Rem maiores ipsa
              nobis nam nemo saepe delectus, voluptates laudantium cum,
              assumenda porro? Saepe tempore sint animi. Distinctio quidem
              dignissimos fuga libero. animi. Distinctio quidem dignissimos fuga
              libero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rem maiores ipsa nobis nam nemo saepe delectus, voluptates
              laudantium cum, assumenda porro? Saepe tempore sint animi.
              Distinctio quidem dignissimos fuga libero.
            </Typography>
          </Grid>
        </Grid>
        <Box mt={12}>
          <Grid container gap={5} display="flex" justifyContent="center">
            <Grid xs={10} sm={12} item>
              <CourseDetails img={Image3} />
            </Grid>
            <Grid xs={10} sm={12} item>
              <CourseDetails img={Image3} />
            </Grid>
            <Grid xs={10} sm={12} item>
              <CourseDetails img={Image3} />
            </Grid>
            <Grid xs={10} sm={12} item>
              <CourseDetails img={Image3} />
            </Grid>
          </Grid>
        </Box>
        <Box mt>
          <Collage />
        </Box>
      </Container>
    </>
  );
}

export default AboutUs;
