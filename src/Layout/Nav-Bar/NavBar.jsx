import React, { useState } from "react";
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
import Logo from '../../../src/assets/Images/kindpng_4958412.png'

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = ["Home", "About", "Services", "Contact"];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    setDrawerOpen(false);
  };

  const drawerContent = (
    <List>
      {menuItems.map((text) => (
        <ListItem button key={text} onClick={() => handleMenuItemClick(text)}>
          <ListItemText sx={{ color: "black" }} primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box 
            component="img"
            sx={{
              height: 40, // Adjust this value as needed
              width: 'auto', // This maintains the aspect ratio
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
                    marginLeft: "20px",
                    marginRight: "50px",
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
                      color: "priamry.main",
                      backgroundColor:"transparent"
                     
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
    </>
  );
};

export default NavBar;
