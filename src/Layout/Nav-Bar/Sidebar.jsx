import React, { useState } from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  IconButton, 
  Divider,
  Toolbar,
  useTheme
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  School as CoursesIcon,
  Groups as CommunityIcon,
  Info as AboutIcon,
  Mail as ContactIcon,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState('Home');
  const navigate = useNavigate();

  // Define default widths
  const drawerWidth = 240;
  const collapsedWidth = 68;

  const menuItems = [
    { title: 'Home', value: 'home', icon: <HomeIcon /> },
    { title: 'Courses', value: 'courses', icon: <CoursesIcon /> },
    { title: 'Community Projects', value: 'community-projects', icon: <CommunityIcon /> },
    { title: 'About Us', value: 'about-us', icon: <AboutIcon /> },
    { title: 'Contact Us', value: 'contact-us', icon: <ContactIcon /> },
  ];

  const handleMenuItemClick = (title, value) => {
    setSelectedItem(title);
    navigate(value);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : collapsedWidth,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            overflowX: 'hidden',
            backgroundColor: theme.palette.background.paper,
            borderRight: 'none',
          },
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeft /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem 
              key={item.title} 
              disablePadding 
              sx={{ display: 'block' }}
            >
              <ListItemButton
                selected={selectedItem === item.title}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.action.selected,
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: theme.palette.action.selected,
                  },
                }}
                onClick={() => handleMenuItemClick(item.title, item.value)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: selectedItem === item.title 
                      ? theme.palette.primary.main 
                      : theme.palette.text.secondary,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.title} 
                  sx={{ 
                    opacity: open ? 1 : 0,
                    color: selectedItem === item.title 
                      ? theme.palette.primary.main 
                      : theme.palette.text.primary,
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3,
          // marginLeft: open ? `${drawerWidth}px` : `${collapsedWidth}px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;