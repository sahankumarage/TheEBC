import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import Image1 from "../../assets/Images/tim-mossholder-hOF1bWoet_Q-unsplash.jpg";
import location from "../../assets/Icon/mortarboard.png";
import Entry from "../../assets/Icon/history.png";
import Aos from "aos";
import CourseCard from "../../Components/Course Card/CourseCard";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import Image3 from "../../assets/Images/woman-home-using-laptop.jpg";
import CourseFee from "../../Components/CourseFee/CourseFee";
import Footer from "../../Components/Footer/Footer";
import InstaFeed from "../../Components/Insta Feed/InstaFeed";

const homeSlides = [{ title: "Course", img: Image1 }];

function Course() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
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
      <Box>
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
              textAlign="start"
              justifyContent="start"
              display="flex"
              sx={{ position: "relative" }}
            >
              <Typography
                color="black"
                variant="h2"
                sx={{
                  fontWeight: "600",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: {
                      lg: "-70px",
                      md: "-65px",
                      sm: "-50px",
                      xs: "-30px",
                    },
                    bottom: "-15px",
                    width: "100%",
                    height: "20px",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='20 0 200 5' preserveAspectRatio='none'%3E%3Cpath d='M0,12 Q400,9 150,5 T200,9 T300,5' stroke='%230000FF' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  },
                }}
              >
                Welcome to International{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  English
                </Box>{" "}
                Institute{" "}
              </Typography>
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
              <Typography
                color="#757575"
                variant="h5"
                sx={{ fontWeight: "600" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                maiores ipsa nobis nam nemo saepe delectus, voluptates
                laudantium cum, assumenda porro? Saepe tempore sint animi.
                Distinctio quidem dignissimos fuga libero. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Rem maiores ipsa nobis nam
                nemo saepe delectus, voluptates laudantium cum, assumenda porro?
                Saepe tempore sint animi. Distinctio quidem dignissimos fuga
                libero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rem maiores ipsa nobis nam nemo saepe delectus, voluptates
                laudantium cum, assumenda porro? Saepe tempore sint animi.
                Distinctio quidem dignissimos fuga libero. animi. Distinctio
                quidem dignissimos fuga libero. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Rem maiores ipsa nobis nam nemo
                saepe delectus, voluptates laudantium cum, assumenda porro?
                Saepe tempore sint animi. Distinctio quidem dignissimos fuga
                libero.
              </Typography>
            </Grid>
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
          </Grid>
          <Grid container mt={4} spacing={0}>
            <Grid xs={6} sm={3} item>
              <Box
                // sx={{ backgroundColor: "primary.light" }}
                p={3}
                borderRadius={2}
              >
                <CourseCard img={location} />
              </Box>
            </Grid>
            <Grid xs={6} sm={3} item>
              <Box
                display="flex"
                justifyContent="center"
                // sx={{ backgroundColor: "primary.light" }}
                p={3}
                borderRadius={2}
              >
                <CourseCard img={location} />
              </Box>
            </Grid>
            <Grid xs={6} sm={3} item>
              <Box
                display="flex"
                justifyContent="center"
                // sx={{ backgroundColor: "primary.light" }}
                p={3}
                borderRadius={2}
              >
                <CourseCard img={location} />
              </Box>
            </Grid>
            <Grid xs={6} sm={3} item>
              <Box
                display="flex"
                justifyContent="center"
                // sx={{ backgroundColor: "primary.light" }}
                p={3}
                borderRadius={2}
              >
                <CourseCard img={location} />
              </Box>
            </Grid>
          </Grid>
          <Box mt={6}>
            <Grid container>
              <Grid xs={12} p={3} item display="flex" justifyContent="center">
                <Box>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "primary.dark", // Text color
                      borderColor: "primary.dark", // Border color
                      padding: { xs: "12px 20px", sm: "12px 150px" }, // Increase padding for size
                      width: "100%",

                      fontSize: "1.0rem",
                      "&:hover": {
                        borderColor: "primary.main", // Border color on hover
                        backgroundColor: "primary.dark", // Background on hover
                        color: "#fff", // Text color on hover
                      },
                    }}
                  >
                    Apply For the Course
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box mt={6}>
            <Grid container display="flex" justifyContent="center">
              <Grid
                xs={10}
                p={3}
                item
                display="block"
                justifyContent="start"
                sx={{ backgroundColor: "primary.light", borderRadius: 3 }}
              >
                <Box>
                  <Typography variant="h5">Entry requirements</Typography>
                </Box>
                <Box mt={1}>
                  <Typography
                    color="#757575"
                    variant="h7"
                    sx={{ fontWeight: "600" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    maiores ipsa nobis nam nemo saepe delectus, voluptates
                    laudantium cum, assumenda porro? Saepe tempore sint animi.
                    Distinctio quidem dignissimos fuga libero. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Rem maiores ipsa
                    dignissimos fuga libero. animi. Distinctio quidem
                    dignissimos fuga libero. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Rem maiores ipsa nobis nam
                    nemo saepe delectus, voluptates laudantium cum, assumenda
                    porro? Saepe tempore sint animi. Distinctio quidem
                    dignissimos fuga libero.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
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
          <Box mt={6}>
            <Grid container display="flex" justifyContent="center">
              <Grid xs={9} item>
                <CourseFee />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box mt={6}>
        <Footer />
      </Box>
    </>
  );
}

export default Course;
