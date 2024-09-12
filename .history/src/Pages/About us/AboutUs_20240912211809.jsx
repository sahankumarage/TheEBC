import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Image1 from "../../assets/Images/3.png";
import Image from "../../assets/Images/1.png";
import Comminity from "../../assets/Images/Photo/PXL_20240821_101813170~2.jpg";
import Comminity from "../../assets/Images/Photo/PXL_20240821_101813170~2.jpg";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import Collage from "../../Components/Collage/Collage";
import Footer from "../../Components/Footer/Footer";

const homeSlides = [
  { title: "About Us", img: Image1 },
];
const slide = [
  { title: "About Us", img: Image },
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
          {slide.map((slide, index) => (
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
                        lg: "45vh",
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
              At our institute, we believe that English is essential for Sri
              Lankan students to achieve their goals and unlock their full
              potential. Despite English being taught from grades 1 to 13 in Sri
              Lanka, many students struggle with fear and a lack of passion for
              the language, which hinders their progress. Recognizing the
              importance of English as a global language, we’ve developed an
              innovative approach that truly engages students. We constantly
              experiment with new methods to help them improve, particularly
              focusing on students from underprivileged backgrounds. Our
              collaboration with foreign instructors in Colombo has been
              especially impactful, bringing us great joy as we witness the
              positive changes in our students' lives. Our commitment is to
              always support and enhance English education for Sri Lankan
              students.
            </Typography>
          </Grid>
        </Grid>
        <Box mt={12}>
          <Grid container gap={5} display="flex" justifyContent="center">
            <Grid xs={10} sm={12} item>
              <CourseDetails
                img={Image1}
                title={
                  "Expertise and Friendly Guidance from International Instructors"
                }
                details={
                  "Our English course is led by a team of dynamic, young instructors from abroad, each bringing a wealth of knowledge and experience in English language education. These instructors are not only highly proficient in English but also skilled in making the language accessible and engaging for students. Their confidence in communication helps them effectively impart their knowledge, ensuring that Sri Lankan students benefit from a truly immersive language-learning experience. The instructors are eager to share their expertise and cultural experiences, making the learning environment enriching and enjoyable for everyone."
                }
              />
            </Grid>
            <Grid xs={10} sm={12} item>
              <CourseDetails
                img={Image1}
                title={"Leadership by a Senior University Lecturer"}
                details={
                  "The course is guided by a senior lecturer from a prestigious government university, who brings extensive experience and a deep understanding of effective teaching strategies. With years of experience in English education, she knows how to tailor her teaching methods to meet the diverse needs of students. Her expertise in managing students and creating a supportive learning environment ensures that each participant receives the guidance and support needed to succeed. She is dedicated to overseeing every aspect of the course, ensuring that students gain the skills and confidence to excel in English."
                }
              />
            </Grid>
            <Grid xs={10} sm={12} item>
              <CourseDetails
                img={Comminity}
                title={"Community Projects for Underprivileged Students"}
                details={
                  "As part of our commitment to social responsibility, we are actively involved in community projects that aim to uplift underprivileged students in Sri Lanka. These charity-driven initiatives focus on providing free English education to those who need it most, recognizing the importance of English as a key to future opportunities. Our goal is to empower Sri Lankan students with the language skills they need to succeed, contributing to their personal growth and the overall development of the community. This mission reflects our long-term ambition to see Sri Lanka thrive through education."
                }
              />
            </Grid>
          </Grid>
        </Box>
        <Box mt={10}>
          <Collage />
        </Box>
      </Container>
      <Box>
        <Footer />
      </Box>
    </>
  );
}

export default AboutUs;
