import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import TypoVariant from "../../Hooks/TypoResponsive/UseTypoResponsive";
import Image1 from "../../assets/Images/excited-teen-girl-showing-tablet-boyfriend.jpg";
import Image2 from "../../assets/Images/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking.jpg";
import Image3 from "../../assets/Images/woman-home-using-laptop.jpg";
import ImageList from "../../Components/ImageList/ImageList";
import QualityCard from "../../Components/Quality Count Card/QualityCard";
import BenifitsCard from "../../Components/Benefits Cards/BenifitsCard";

const homeSlides = [
  { title: "International English Institute", img: Image1 },
  { title: "Expand Your Vocabulary", img: Image2 },
  { title: "Expand Your English Speaking", img: Image3 },
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
                  textAlign: "center",
                  padding: "0 16px",
                }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h2" color="primary.lighter">
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
                  left: {lg:"-40px", md:"-65px", sm:"-50px",},
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
            item
            mt={2}
            xs={6}
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
          <Grid
            item
            xs={6}
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
              sx={{ width: "100%", height: "100%" }} // Ensure carousel takes full size of container
            >
              {homeSlides.map((slide, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <Box
                    component="img"
                    src={slide?.img}
                    alt={slide.title}
                    sx={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
              ))}
            </Carousel>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Grid container>
            <Grid item xs={4} md={8} lg={4} sm={8}>
              <Typography
                color="black"
                variant="h3"
                sx={{
                  fontWeight: "600",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: {lg:"-40px", md:"-50px", sm:"-50px"},
                    bottom: "-15px",
                    width: "100%",
                    height: "20px",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='20 0 200 5' preserveAspectRatio='none'%3E%3Cpath d='M0,12 Q400,9 150,5 T200,9 T300,5' stroke='%230000FF' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  },
                }}
              >
                Lorem ipsum dolor sit amet <br />{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  consectetur. Semper
                </Box>{" "}
              </Typography>
            </Grid>
            <Grid item xs={12} mt={8}>
              <QualityCard />
            </Grid>
          </Grid>
        </Box>
        <Box mt={3} p={3}>
          <Grid container display="flex" justifyContent="center">
            <Grid item>
              <Typography
                color="black"
                variant="h3"
                sx={{
                  fontWeight: "600",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: {lg:"-40px", md:"-55px"},
                    bottom: "-5px",
                    width: "100%",
                    height: "20px",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='20 0 200 5' preserveAspectRatio='none'%3E%3Cpath d='M0,12 Q400,9 150,5 T200,9 T300,5' stroke='%230000FF' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  },
                }}
              >
                Lorem ipsum dolor sit amet{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  consectetur. Semper
                </Box>{" "}
              </Typography>
            </Grid>
            <Grid item xs={10} mt={10}>
              <BenifitsCard />
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          spacing={5}
          mt={3}
          sx={{
            marginTop: { xs: "16px", sm: "24px", md: "32px" }, // Responsive margin-top
            borderRadius: "20px", // Optional: Rounded corners
          }}
          p={2}
        >
          <Grid
            item
            xs={6}
            lg={6}
            md={12}
            mt={2}
            p={2}
            textAlign="start"
            justifyContent="start"
            display="flex"
          >
            <Carousel
              animation="fade"
              interval={3000}
              indicators={false}
              sx={{ width: "100%", height: "100%" }} // Ensure carousel takes full size of container
            >
              {homeSlides.map((slide, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <Box
                    component="img"
                    src={slide?.img}
                    alt={slide.title}
                    sx={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
              ))}
            </Carousel>
          </Grid>
          <Grid item mt={2} xs={6} lg={6} md={12} p={2} textAlign="start">
            <Box mb={3}>
              <Typography
                color="black"
                variant="h3"
                sx={{
                  fontWeight: "600",
                  position: "relative",
                }}
              >
               Lorem ipsum dolor sit amet consectetur 
               {" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                consectetur adith
                </Box>{" "}
                Institute{" "}
              </Typography>
            </Box>
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
      </Container>
    </>
  );
}

export default Home;
