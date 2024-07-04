import { Box, Grid, Typography, keyframes } from "@mui/material";
import React from "react";

function ImageSlider({title, img}) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "60vh", sm: "100vh", md: "80vh" },
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `
          linear-gradient(0deg, rgba(44, 62, 80, 0) 37%,#C5DEF4 99%),
          url(${img})
        `,
          backgroundSize: { xs: "200%", sm: "100%", md: "100%" },
          backgroundPosition: "center",
          //clipPath: "polygon(0% 0%, 100% 0%, 43.6% 100%, 0% 100%)",
          //   clipPath: "circle(65% at 0 85%)",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Box
        mb={30}
        p={3}
        display={"flex"}
        justifyContent={"center"}
        sx={{ position: "relative", zIndex: 3 }}
      >
        <Typography
          textAlign={"center"}
          sx={{
            textShadow: "6px 5px 12px rgba(0, 0, 1, 1)",
          }}
          variant="h2"
          color="primary.lighter"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

export default ImageSlider;
