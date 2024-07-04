import { Box, Fade, Grid, Typography, keyframes } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image1 from "../../assets/Images/excited-teen-girl-showing-tablet-boyfriend.jpg";
import Image2 from "../../assets/Images/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking.jpg";
import ImageSlider from "../../Components/Image Slider/ImageSlider";

const homeSlides = [
  { title: "Develop Your English Skill", img: Image1 },
  { title: "Expand Your Vocabulary", img: Image2 },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const changeSlide = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % homeSlides.length);
        setIsTransitioning(false);
      }, 500); // Half of the transition duration
    };

    const randomInterval = () =>
      Math.floor(Math.random() * (7000 - 3000 + 1) + 3000); // Random time between 3-7 seconds

    const timer = setInterval(changeSlide, randomInterval());

    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {homeSlides.map((slide, index) => (
        <Fade
          key={index}
          in={index === currentSlide && !isTransitioning}
          timeout={1000}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: index === currentSlide ? "block" : "none",
              transition: "all 1s ease-in-out",
              transform: isTransitioning ? "scale(1)" : "scale(1)",
            }}
          >
            <ImageSlider title={slide.title} img={slide.img} />
          </Box>
        </Fade>
      ))}
    </Box>
  );
}

export default Home;
