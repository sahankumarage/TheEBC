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
import Logo from "../../../src/assets/Images/kindpng_4958412.png";
import Image from "../../../src/assets/Images/woman-home-using-laptop.jpg";

const NavBar = ({children}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    "Home",
    "Courses",
    "Student Life",
    "Charity",
    "About Us",
    "Contact Us",
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

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    setDrawerOpen(false);
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
            height: 40,
            width: "auto",
          }}
          alt="Your logo"
          src={Logo}
        />
      </ListItem>

      {menuItems.map((text) => (
        <ListItem
          sx={{ width: "200px" }}
          button
          key={text}
          onClick={() => handleMenuItemClick(text)}
        >
          <ListItemText
            sx={{
              color: "black",
              textAlign: "start",

              position: "relative", // Ensure this is added to apply ::after pseudo-element correctly
              "&::after": {
                content: '""',
                position: "absolute",
                width: selectedItem === text ? "100%" : "0%",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "primary.main",
                transition: "width 0.3s ease-in-out",
              },
            }}
            primary={text}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backdropFilter: isScrolled ? "blur(5px)" : "none",
          transition: "backdrop-filter 0.3s ease-in-out",
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component="img"
            sx={{
              height: 40,
              width: "auto",
            }}
            alt="Your logo"
            src={Logo}
          />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {!isMobile &&
              menuItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    marginLeft: "12px",
                    marginRight: "20px",
                    color: "black",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: selectedItem === item ? "100%" : "0%",
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
                  onClick={() => handleMenuItemClick(item)}
                >
                  {item}
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
      <Box>
        {children}
      </Box>
    </>
  );
};

export default NavBar;
