import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import Image1 from "../../assets/Images/tim-mossholder-hOF1bWoet_Q-unsplash.jpg";
import duration from "../../assets/Icon/mortarboard.png";
import Entry from "../../assets/Icon/history.png";
import location from "../../assets/Icon/location-pin.png";
import calender from "../../assets/Icon/calendar.png";
import Aos from "aos";
import CourseCard from "../../Components/Course Card/CourseCard";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import Entertainment from "../../assets/Images/StorySet/Audiobook-rafiki.png";
import Image3 from "../../assets/Images/StorySet/Interview.png";
import Talking from "../../assets/Images/StorySet/Audiobook-rafiki.png";
import Practical from "../../assets/Images/StorySet/Audiobook-rafiki.png";
import Culture from "../../assets/Images/StorySet/Audiobook-rafiki.png";
import Global from "../../assets/Images/StorySet/Globalization.png";
import Workshops from "../../assets/Images/StorySet/Audiobook-rafiki.png";
import CourseFee from "../../Components/CourseFee/CourseFee";
import Footer from "../../Components/Footer/Footer";
import InstaFeed from "../../Components/Insta Feed/InstaFeed";
import FormModal from "../../Components/ModalForm/ModalForm";

const homeSlides = [{ title: "Course", img: Image1 }];

function Course() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                      lg: "-30px",
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
                Course{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  Overview
                </Box>{" "}
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
                Our English course is designed to help Sri Lankan students
                develop their English skills in a unique and effective way. This
                program focuses on achieving native-like fluency, thinking
                directly in English, and learning through practical, engaging
                methods. Spanning 3-4 months, the course provides over 100 hours
                of immersive English practice. This extensive time frame ensures
                that you receive thorough language exposure and significant
                improvement in your English abilities. Throughout the course,
                you’ll participate in interactive outdoor activities with native
                English instructors. These activities are designed to make
                learning enjoyable while helping you practice English in
                real-world contexts, improve your accent, and master effective
                learning techniques. In addition to enhancing your language
                skills, the course aims to help you build global connections and
                explore international opportunities. By engaging with foreign
                instructors and participating in practical experiences, you’ll
                be well-prepared for future success and new opportunities.
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
                <CourseCard
                  img={Entry}
                  title={"Duration"}
                  details={"3-4 Months"}
                />
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
                <CourseCard
                  img={duration}
                  title={"Entry"}
                  details={"October / January"}
                />
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
                <CourseCard
                  img={location}
                  title={"Location"}
                  details={"Colombo(Physical)"}
                />
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
                <CourseCard
                  img={calender}
                  title={"Days"}
                  details={"Saturday / Tuesday"}
                />
              </Box>
            </Grid>
          </Grid>
          <Box mt={6}>
            <Grid container>
              <Grid xs={12} p={3} item display="flex" justifyContent="center">
                <Box>
                  <Button
                    variant="outlined"
                    onClick={handleOpen}
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
                  <FormModal open={open} handleClose={handleClose} />
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
                    To enroll in our program, you must be between 18-25 years
                    old, have passed your O/L with at least a C in English, and
                    possess a genuine passion for the language. We require that
                    you already have a solid understanding of English, including
                    grammar, as our course focuses on advancing your existing
                    skills rather than teaching the basics. Admission is based
                    on an interview where we assess your knowledge and
                    enthusiasm for English.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box mt={12}>
            <Grid container gap={5} display="flex" justifyContent="center">
              <Grid xs={10} sm={12} item>
                <CourseDetails
                  img={Image3}
                  title={"1. Confident Communication with Native Instructors"}
                  details={
                    "This module helps you build confidence in speaking with native English instructors. You'll learn how to adjust your thinking patterns to align with native speakers, making English communication more natural and intuitive. The course highlights simple yet effective methods to master the language, focusing on key points that make learning easier and more enjoyable."
                  }
                />
              </Grid>
              <Grid xs={10} sm={12} item>
                <CourseDetails
                  img={Image3}
                  title={"2. Daily English Interviews"}
                  details={
                    "Every day, you’ll participate in a 15-minute interview with a native English instructor. This daily practice is designed to improve your speaking skills, boost your confidence, and prepare you for real-world interviews. After three months of consistent practice, you'll be ready to face any interview confidently, a critical skill in Sri Lanka where English interviews are often challenging."
                  }
                />
              </Grid>
              <Grid xs={10} sm={12} item>
                <CourseDetails
                  img={Image3}
                  title={"3. Practical English in Real-Life Situations"}
                  details={
                    "On class days, you’ll venture to various indoor and outdoor locations where you can practice using English in everyday situations. This hands-on approach helps you learn how to navigate real-world interactions in English, building your confidence and fluency in your environment."
                  }
                />
              </Grid>
              <Grid xs={10} sm={12} item>
                <CourseDetails
                  img={Image3}
                  title={"4. Learning English Through Entertainment"}
                  details={
                    "This course module emphasizes the importance of learning English through entertainment and digital platforms. In today’s world, English proficiency is essential for using social media and other digital tools. You'll explore how to learn English through current technologies, including AI, making the learning process engaging and relevant."
                  }
                />
              </Grid>
              <Grid xs={10} sm={12} item>
                <CourseDetails
                  img={Image3}
                  title={"5. Interactive Workshops and Activities"}
                  details={
                    "Every week, you’ll engage in full-day workshops filled with interactive activities and games, all conducted by native English speakers. These sessions are designed to improve your speaking skills in a fun, relaxed environment. The course moves beyond traditional book learning, focusing instead on real-world engagement to make English learning more effective and enjoyable."
                  }
                />
              </Grid>
              <Grid xs={10} sm={12} item>
                <CourseDetails
                  img={Image3}
                  title={"6. Global Cultural Awareness"}
                  details={
                    "This module introduces you to different cultures and countries, teaching you how to interact with people from various backgrounds. You’ll learn about international opportunities and how to engage with others on a global scale, expanding your cultural understanding and opening doors to new experiences."
                  }
                />
              </Grid>
              <Grid xs={10} sm={12} item>
                <CourseDetails
                  img={Image3}
                  title={"7. Building Global Connections"}
                  details={
                    "In this module, you’ll learn how to establish and maintain global connections, a vital skill for accessing international opportunities. The course provides guidance on connecting with foreign universities and communities, helping you open up a world of possibilities right from Sri Lanka."
                  }
                />
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
