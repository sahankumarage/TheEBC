import React from "react";
import Map from "../../Components/Map/Map";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  SvgIcon,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import Email from "../../assets/Icon/email.png";
import Phone from "../../assets/Icon/phone-call.png";
import GPS from "../../assets/Icon/gps.png";
import ContactCard from "../../Components/Contact/ContactCard";
import Footer from "../../Components/Footer/Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import YoutubeIcon from "@mui/icons-material/Youtube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";

const TikTokIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
  </SvgIcon>
);

function ContactUs() {
  const handleSocialMediaClick = (platform) => {
    const urls = {
      Facebook: "https://www.facebook.com/profile.php?id=61563005853057",
      Youtube: "https://www.youtube.com/channel/UC2eL3udoPxkMM-6wlbNVFqw",
      Instagram:
        "https://www.instagram.com/iei.education.lk?igsh=cTB0cndxcndhejlw",
      TikTok: "https://www.tiktok.com/@ieiedu.lk?_t=8oceQqmX44I&_r=1",
    };
    window.open(urls[platform], "_blank");
  };
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

          <Box sx={{ flex: 1, padding: 2 }} mt={8}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ mr: 1 }}>
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ mr: 1 }}>
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ mr: 1 }}>
                          <HomeIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ mr: 1 }}>
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ mr: 1 }}>
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ mr: 1, mt: -8 }}>
                          <MessageIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} display="flex" justifyContent="center">
          <ContactCard img={Email} detail="info@gmail.com" title="Email" />
          <ContactCard img={Phone} detail="0717442222" title="Phone" />
          <ContactCard
            img={GPS}
            detail="Colombo 04, Western Province, Srilanka"
            title="Location"
          />
        </Grid>
      </Grid>
    <Grid item xs={6} sm={}>
        <Grid container mt={10}>
          <Grid item xs={4} sm={2} display="flex" justifyContent="center">
            <IconButton
              color="inherit"
              aria-label="Facebook"
              onClick={() => handleSocialMediaClick("Facebook")}
            >
              <FacebookIcon sx={{ fontSize: 60, color: "#0C44AE" }} />
            </IconButton>
          </Grid>

          <Grid item xs={3} sm={2} display="flex" justifyContent="center">
            <IconButton
              color="inherit"
              aria-label="Youtube"
              onClick={() => handleSocialMediaClick("Youtube")}
            >
              <YoutubeIcon sx={{ fontSize: 60, color: "#0C44AE" }} />
            </IconButton>
          </Grid>
          <Grid item xs={3} sm={2} display="flex" justifyContent="center">
            <IconButton
              color="inherit"
              aria-label="Instagram"
              onClick={() => handleSocialMediaClick("Instagram")}
            >
              <InstagramIcon sx={{ fontSize: 60, color: "#0C44AE" }} />
            </IconButton>
          </Grid>
          <Grid item xs={3} sm={2} display="flex" justifyContent="center">
            <IconButton
              color="inherit"
              aria-label="TikTok"
              onClick={() => handleSocialMediaClick("TikTok")}
            >
              <TikTokIcon sx={{ fontSize: 60, color: "#0C44AE" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Box mt={10}>
        <Footer />
      </Box>
    </>
  );
}

export default ContactUs;
