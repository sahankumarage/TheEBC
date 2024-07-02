import React, { useState } from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <List>
      {menuItems.map((text) => (
        <ListItem button key={text} onClick={toggleDrawer(false)}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="static" sx={{backgroundColor:"grey"}}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">
            My App
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!isMobile && menuItems.map((item) => (
              <Typography key={item} sx={{ marginLeft: '20px', marginRight: '50px' }}>
                {item}
              </Typography>
            ))}
            
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
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