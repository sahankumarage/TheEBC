import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../src/assets/Images/english new.png";
import Image from "../../../src/assets/Images/woman-home-using-laptop.jpg";
import { useNavigate } from "react-router-dom";

const NavBar = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Home",
      value: "home",
    },
    {
      title: "Courses",
      value: "courses",
    },
    {
      title: "Carrer",
      value: "career",
    },
    {
      title: "About Us",
      value: "about-us",
    },
    {
      title: "Contact Us",
      value: "contact-us",
    },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (title, value) => {
    setSelectedItem(title);
    setDrawerOpen(false);
    navigate(value);
  };

  const drawerContent = (
    <List>
      <ListItem
        sx={{
          width: "200px",
          display: "flex",
          justifyContent: "start",
          p: 2,
          pl: 3,
        }}
      >
        <Box
          component="img"
          sx={{
            height: "20",
            width: "auto",
          }}
          alt="Logo"
          src={Logo}
        />
      </ListItem>

      {menuItems.map((text) => (
        <ListItem
          sx={{ width: "200px" }}
          button
          key={text}
          onClick={() => handleMenuItemClick(text?.title, text?.value)}
        >
          <ListItemText
            sx={{
              color: "black",
              textAlign: "start",

              position: "relative", // Ensure this is added to apply ::after pseudo-element correctly
              "&::after": {
                content: '""',
                position: "absolute",
                width: selectedItem === text?.title ? "5000000000000000000000000000000000000000000000000000.......................................................0............%" : "0%",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "primary.main",
                transition: "width 0.3s ease-in-out",
              },
            }}
            primary={text?.title}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar
        position=" absolute"
        sx={{
          backdropFilter: "blur(20px)",
          transition: "backdrop-filter 0.3s ease-in-out",
          boxShadow: "none",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component="img"
            sx={{
              height: {xs:45, sm:45, md:60, lg:63},
              width: "auto",
            }}
            alt="Your logo"
            src={Logo}
          />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {!isMobile &&
              menuItems.map((item) => (
                <Button
                  key={item?.title}
                  sx={{
                    marginLeft: "12px",
                    marginRight: "20px",
                    color: "black",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: selectedItem === item?.title ? "100%" : "0%",
                      height: "2px",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "primary.main",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => handleMenuItemClick(item?.title, item?.value)}
                >
                  {item?.title}
                </Button>
              ))}

            {isMobile && (
              <IconButton
                edge="end"
                sx={{ color: "black" }}
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
      <Box>{children}</Box>
    </>
  );
};

export default NavBar;
