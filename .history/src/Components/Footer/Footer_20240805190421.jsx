import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import YoutubeIcon from "@mui/icons-material/Youtube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MyLogo from "../../assets/Images/english new.png";

const primary = {
  lighter: "#F4FAFF",
  light: "#C1E3FF",
  main: "#309BFD",
  dark: "#0C44AE",
  darker: "#042174",
  contrastText: "#FFFFFF",
};

const StyledFooter = styled("footer")({
  backgroundColor: primary.darker,
  color: primary.contrastText,
  padding: "2rem 0",
});

const Logo = styled("img")({
  height: "80px",
  marginBottom: "0.7rem",
  padding: "3px",
});

const MenuItem = styled(Typography)({
  color: primary.light,
  "&:hover": {
    color: primary.lighter,
  },
  display: "inline-block",
  marginRight: "1rem",
});

const ContactInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "0.5rem",
});

const Footer = () => {
  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <StyledFooter>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Logo src={MyLogo} alt="Company Logo" />
            <Typography variant="body2">
              © 2024 International English Institute
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign:{sm:"center", xs:"start"},
              }}
            >
              {menuItems.map((item) => (
                <MenuItem key={item} variant="body2" gutterBottom>
                  {item}
                </MenuItem>
              ))}
            </Box>
          </Grid>

          <Grid item xs={4} sm={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Youtube">
                <YoutubeIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={5} sm={3}>
            <Box>
              <ContactInfo>
                <LocationOnIcon sx={{ marginRight: 1 }} />
                <Typography variant="body2">
                  123 Main St, City, Country
                </Typography>
              </ContactInfo>
              <ContactInfo>
                <PhoneIcon sx={{ marginRight: 1 }} />
                <Typography variant="body2">+1 234 567 8900</Typography>
              </ContactInfo>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
