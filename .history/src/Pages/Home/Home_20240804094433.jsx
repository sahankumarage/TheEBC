import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import TypoVariant from "../../Hooks/TypoResponsive/UseTypoResponsive";
import Image1 from "../../assets/Images/excited-teen-girl-showing-tablet-boyfriend.jpg";
import Image2 from "../../assets/Images/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking.jpg";
import Image3 from "../../assets/Images/woman-home-using-laptop.jpg";
import ImageList from "../../Components/ImageList/ImageList";

const homeSlides = [
  { title: "Develop Your English Skill", img: Image1 },
  { title: "Expand Your Vocabulary", img: Image2 },
  { title: "Expand Your English Speaking", img: Image3 },
];

function Home() {
  const variant = TypoVariant();

  return (
    <>
      {/* Carousel */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "65vh", sm: "65vh", md: "85vh", lg: "88vh" },
          overflow: "hidden",
        }}
      >
        <Carousel
          animation="fade"
          interval={Math.floor(Math.random() * (7000 - 3000 + 1) + 3000)}
          indicators={false}
        >
          {homeSlides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                height: { xs: "65vh", sm: "65vh", md: "80vh", lg: "85vh" },
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `
      linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%),
      url(${slide.img})
    `,
                  backgroundSize: { xs: "200%", sm: "100%", md: "100%" },
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 3,
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Typography variant={variant} color="primary.main">
                  {slide.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>

      {/* Carousel */}

      <Container>
        <Grid mt={2} container>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Typography textAlign="center" variant={variant}>
              Welcome to The English Boot Camp!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
