import React, { useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import TypoVariant from "../../Hooks/TypoResponsive/UseTypoResponsive";
import Image1 from "../../assets/Images/Desktop - 1.png";
import Image2 from "../../assets/Images/Pool Table Girl.png";
import Image3 from "../../assets/Images/Barista.png";
import Image4 from "../../assets/Images/andrew-neel-QLqNalPe0RA-unsplash.jpg";
import ImageList from "../../Components/ImageList/ImageList";
import QualityCard from "../../Components/Quality Count Card/QualityCard";
import BenifitsCard from "../../Components/Benefits Cards/BenifitsCard";
import Footer from "../../Components/Footer/Footer";

import Aos from "aos";

const homeSlides = [
  { title: "International English Institute", img: Image1 },
  { title: "Expand Your Vocabulary", img: Image2 },
  { title: "Expand Your English Speaking", img: Image3 },
  { title: "Expand Your English Speaking", img: Image4 },
];

function Home() {
  const variant = TypoVariant();

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
        <Carousel
          animation="fade"
          interval={5000}
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
                  <Grid item xs={4} data-aos="fade-right" >
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
                  left: { lg: "-70px", md: "-65px", sm: "-50px", xs: "-30px" },
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
        <Box mt={4}>
          <Grid container>
            <Grid
              data-aos="fade-up"
              item
              xs={12}
              md={8}
              lg={4}
              sm={8}
              display="flex"
              justifyContent="center"
            >
              <Typography
                color="black"
                variant="h3"
                sx={{
                  fontWeight: "600",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: {
                      lg: "-30px",
                      md: "-50px",
                      sm: "-30px",
                      xs: "-28px",
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
                Lorem ipsum dolor sit amet <br />{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  consectetur. sahan
                </Box>{" "}
              </Typography>
            </Grid>
            <Grid
              data-aos="fade-up"
              item
              display="flex"
              justifyContent="center"
              xs={12}
              mt={8}
            >
              <QualityCard />
            </Grid>
          </Grid>
        </Box>
        <Box mt={3} p={3}>
          <Grid container display="flex" justifyContent="center">
            <Grid item xs={12}>
              <Typography
                color="black"
                variant="h3"
                sx={{
                  fontWeight: "600",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: {
                      lg: "-110px",
                      md: "-50px",
                      sm: "-50px",
                      xs: "-28px",
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
            marginTop: { xs: "16px", sm: "24px", md: "32px" },
            borderRadius: "20px",
          }}
          p={2}
        >
          <Grid
            data-aos="fade-up"
            item
            xs={12}
            lg={6}
            md={12}
            sm={12}
            mt={2}
            p={2}
            display="flex"
            justifyContent="start"
            textAlign="start"
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
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
                          xs: "60vh",
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
            </Box>
          </Grid>
          <Grid
            data-aos="fade-up"
            item
            mt={2}
            xs={12}
            lg={6}
            md={12}
            sm={12}
            p={2}
            textAlign="start"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box mb={3}>
              <Typography
                color="black"
                variant="h3"
                sx={{
                  fontWeight: "600",
                  position: "relative",
                }}
              >
                Lorem ipsum dolor sit amet consectetur{" "}
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
      <Box>
        <Footer />
      </Box>
    </>
  );
}

export default Home;
