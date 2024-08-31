import React from "react";
import Map from "../../Components/Map/Map";
import { Box, Grid, Typography } from "@mui/material";
import Email from "../../assets/Icon/email.png";
import Phone from "../../assets/Icon/phone-call.png";
import GPS from "../../assets/Icon/gps.png";
import ContactCard from "../../Components/Contact/ContactCard";

function ContactUs() {
  return (
    <>
      <Grid container mt={10}>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="center">
            <Map />
          </Box>
        </Grid>
        <Grid item xs={10} sm={6} spacing={5}>
          <Typography
            color="black"
            variant="h3"
            sx={{
              fontWeight: "600",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                left: { lg: "-40px", md: "-65px", sm: "-50px", xs: "-30px" },
                bottom: "-10px",
                width: "50%",
                height: "20px",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='20 0 200 5' preserveAspectRatio='none'%3E%3Cpath d='M0,12 Q400,9 150,5 T200,9 T300,5' stroke='%230000FF' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              },
            }}
          >
            Message Us
          </Typography>
          <Typography
            color="#757575"
            variant="h5"
            sx={{ fontWeight: "600", mt: 3 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores
            ipsa nobis nam nemo saepe delectus, voluptates laudantium cum,
            assumenda porro? Saepe tempore sint animi. Distinctio quidem
            dignissimos fuga libero. Lorem ipsum dolor sit amet consectetur
          </Typography>
          <Box mt={5}>
            <ContactCard img={Email} detail="info@gmail.com" title="Email" />
            <ContactCard img={Phone} detail="0717442222" title="Phone" />
            <ContactCard img={GPS} detail="Colombo 04, Western Province, Srilanka" title="Location" />
          </Box>
          <Grid container spacing={2}>
      <Grid item>
        <IconButton onClick={() => handleClick('Facebook')} aria-label="Facebook">
          <FacebookIcon sx={{ color: '#0C44AE' }} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={() => handleClick('Instagram')} aria-label="Instagram">
          <InstagramIcon sx={{ color: '#0C44AE' }} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={() => handleClick('YouTube')} aria-label="YouTube">
          <YouTubeIcon sx={{ color: '#0C44AE' }} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={() => handleClick('TikTok')} aria-label="TikTok">
          <MusicNoteIcon sx={{ color: '#0C44AE' }} />
        </IconButton>
      </Grid>
    </Grid>
        </Grid>
      </Grid>
      
    </>
  );
}

export default ContactUs;
