import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import TypoVariant from "../../Hooks/TypoResponsive/UseTypoResponsive";
import Image1 from "../../assets/Images/excited-teen-girl-showing-tablet-boyfriend.jpg";
import Image2 from "../../assets/Images/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking.jpg";
import Image3 from "../../assets/Images/woman-home-using-laptop.jpg";

const homeSlides = [
  { title: "International English Institute", img: Image1 },
  { title: "Expand Your Vocabulary", img: Image2 },
  { title: "Expand Your English Speaking", img: Image3 },
];

const secondarySlides = [
  { title: "Learning Made Fun", img: Image2 },
  { title: "Interactive Classes", img: Image3 },
];

function Home() {
  const variant = TypoVariant();

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", sm: "65vh", md: "75vh", lg: "80vh" },
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
                height: "100%",
                overflow: "hidden",
                backgroundImage: `
                  linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%),
                  url(${slide.img})
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 3,
                  width: "100%",
                  textAlign: "center",
                  padding: "0 16px",
                }}
              >
                <Typography variant="h2" color="primary.lighter">
                  {slide.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>

      <Container
        maxWidth="xl"
        sx={{
          marginTop: { xs: "16px", sm: "24px", md: "32px" },
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          padding: { xs: "16px", sm: "24px", md: "32px" },
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              color="black"
              variant="h2"
              sx={{ fontWeight: "600" }}
            >
              Welcome to International English Institute
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              color="black"
              variant="h5"
              sx={{ fontWeight: "600" }}
            >
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
              dignissimos fuga libero.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Carousel
              animation="slide"
              interval={4000}
              indicators={true}
            >
              {secondarySlides.map((slide, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    height: "100%",
                    overflow: "hidden",
                    backgroundImage: `
                      url(${slide.img})
                    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "8px",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "40%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 3,
                      width: "100%",
                      textAlign: "center",
                      padding: "0 16px",
                      background: "rgba(0, 0, 0, 0.5)",  // Optional: background overlay for text readability
                      borderRadius: "8px",
                    }}
                  >
                    <Typography variant="h4" color="primary.lighter">
                      {slide.title}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
