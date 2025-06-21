import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  InputBase,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useTheme,
  useMediaQuery,
  Container,
  Paper,
  Chip,
  Avatar,
  Grid,
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Search as SearchIcon,
  ShoppingCart as CartIcon,
  Person as PersonIcon,
  Menu as MenuIcon,
  Build as BuildIcon,
  Business as BusinessIcon,
  Store as StoreIcon,
  Engineering as EngineeringIcon,
  Construction as ConstructionIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Favorite as FavoriteIcon,
  History as HistoryIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Category as CategoryIcon,
  TrendingUp as TrendingIcon,
  LocalShipping as LocalShippingIcon,
  VerifiedUser as VerifiedIcon,
  ExpandMore as ExpandMoreIcon,
  Notifications as NotificationsIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Compare as CompareIcon,
  Analytics as AnalyticsIcon,
  Inventory as InventoryIcon,
  Groups as GroupsIcon,
} from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import { Link } from 'react-router-dom';

// Custom styled components with modern color theme
const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: "#fff",
  border: "2px solid #e0e0e0",
  "&:hover": {
    borderColor: "#3a7bd5", // Modern blue accent
  },
  "&:focus-within": {
    borderColor: "#3a7bd5",
    boxShadow: `0 0 0 2px ${alpha("#3a7bd5", 0.2)}`,
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    minWidth: "500px",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#2d3748", // Dark gray for better readability
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

const TopBar = styled(Box)(({ theme }) => ({
  backgroundColor: "#1a365d", // Deep navy blue
  color: "#fff",
  padding: theme.spacing(0.5, 0),
  fontSize: "0.875rem",
}));

const MainHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)", // Softer shadow
  color: "#2d3748",
}));

const CategoryBar = styled(Paper)(({ theme }) => ({
  backgroundColor: "#2c5282", // Medium blue
  color: "#fff",
  padding: theme.spacing(1, 0),
  borderRadius: 0,
  marginTop: 0,
}));

const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  fontWeight: "bold",
  fontSize: "1.5rem",
  color: "#3a7bd5", // Matching the accent blue
  "&:hover": {
    color: "#00d2ff", // Gradient effect on hover
  },
  transition: "color 0.3s ease",
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.3)",
  "&:hover": {
    backgroundColor: alpha("#00d2ff", 0.1), // Teal accent on hover
    color: "#fff",
  },
  margin: theme.spacing(0, 0.5),
}));

const SupplierBadge = styled(Chip)(({ theme }) => ({
  backgroundColor: "#ebf8ff", // Light blue background
  color: "#3182ce", // Medium blue text
  fontWeight: "bold",
  marginLeft: theme.spacing(1),
  border: "1px solid #90cdf4", // Light blue border
}));

const ConstructionLayout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const [categoriesAnchor, setCategoriesAnchor] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    { name: "Cement & Concrete", icon: <ConstructionIcon />, count: "2,341" },
    { name: "Steel & Metal", icon: <BuildIcon />, count: "1,876" },
    { name: "Electrical", icon: <EngineeringIcon />, count: "3,452" },
    { name: "Plumbing", icon: <BuildIcon />, count: "1,234" },
    { name: "Tiles & Flooring", icon: <BusinessIcon />, count: "987" },
    { name: "Paint & Finishing", icon: <BuildIcon />, count: "2,143" },
    { name: "Tools & Equipment", icon: <BuildIcon />, count: "5,678" },
    { name: "Safety Equipment", icon: <VerifiedIcon />, count: "432" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const handleCategoriesOpen = (event) => {
    setCategoriesAnchor(event.currentTarget);
  };

  const handleCategoriesClose = () => {
    setCategoriesAnchor(null);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
        <LogoBox>
          <ConstructionIcon />
          <Typography variant="h6">BuildMart</Typography>
        </LogoBox>
      </Box>
      <List>
        {categories.map((category, index) => (
          <ListItem button key={index}>
            <ListItemIcon sx={{ color: "#ff6b35" }}>
              {category.icon}
            </ListItemIcon>
            <ListItemText
              primary={category.name}
              secondary={`${category.count} products`}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Supplier Shops" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CompareIcon />
          </ListItemIcon>
          <ListItemText primary="Compare Products" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TrendingIcon />
          </ListItemIcon>
          <ListItemText primary="Trending Products" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalShippingIcon />
          </ListItemIcon>
          <ListItemText primary="Bulk Orders" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <VerifiedIcon />
          </ListItemIcon>
          <ListItemText primary="Verified Suppliers" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Top Bar */}
      <TopBar>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <LocationIcon fontSize="small" />
                <Typography variant="body2">
                  Deliver to: <strong>New York, NY</strong>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">
                  24/7 Support: 1-800-BUILD
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button
                color="inherit"
                size="small"
                startIcon={<StoreIcon fontSize="small" />}
              >
                For Suppliers
              </Button>
              <Button color="inherit" size="small">
                Download App
              </Button>
              <Button color="inherit" size="small">
                Help Center
              </Button>
            </Box>
          </Box>
        </Container>
      </TopBar>

      {/* Main Header */}
      <MainHeader position="sticky">
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1 }}>
            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <LogoBox sx={{ mr: { xs: 2, md: 4 } }}>
              <ConstructionIcon />
              <Typography variant="h6" component="div">
                BuildMart
              </Typography>
              <SupplierBadge
                label="PRO"
                size="small"
                sx={{ display: { xs: "none", md: "flex" } }}
              />
            </LogoBox>

            {/* Categories Button - Desktop */}
            <Button
              startIcon={<CategoryIcon />}
              endIcon={<ArrowDownIcon />}
              onClick={handleCategoriesOpen}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                backgroundColor: "#34495e",
                color: "white",
                "&:hover": {
                  backgroundColor: "#2c3e50",
                },
              }}
            >
              All Categories
            </Button>

            {/* Search Bar */}
            <SearchWrapper sx={{ flexGrow: 1, mr: 2 }}>
              <Box sx={{ position: "relative", display: "flex" }}>
                <StyledInputBase
                  placeholder="Search materials, suppliers, brands..."
                  inputProps={{ "aria-label": "search" }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <IconButton
                  type="submit"
                  sx={{
                    p: 1,
                    backgroundColor: "#ff6b35",
                    color: "white",
                    borderRadius: "0 8px 8px 0",
                    "&:hover": {
                      backgroundColor: "#e55a2b",
                    },
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Box>
            </SearchWrapper>

            {/* Right Side Icons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton color="inherit">
                <Badge badgeContent={3} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>

              <IconButton color="inherit">
                <Badge badgeContent={5} color="error">
                  <CartIcon />
                </Badge>
              </IconButton>

              <IconButton color="inherit">
                <Badge badgeContent={2} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <Button
                onClick={handleUserMenuOpen}
                startIcon={<PersonIcon />}
                endIcon={<ArrowDownIcon />}
                sx={{ ml: 1, color: "inherit" }}
              >
                <Box sx={{ display: { xs: "none", sm: "block" } }}>Account</Box>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </MainHeader>

      {/* Category Bar */}
      <CategoryBar elevation={0}>
        <Container maxWidth="xl">
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#ff6b35",
                height: 3,
              },
              "& .MuiTab-root": {
                color: "white",
                textTransform: "none",
                minWidth: "unset",
                padding: "6px 16px",
                "&.Mui-selected": {
                  color: "#ff6b35",
                  fontWeight: "bold",
                },
              },
            }}
          >
            <Tab
              label="Home"
              icon={<ConstructionIcon fontSize="small" />}
              iconPosition="start"
            />
            <Tab
              label="Products"
              icon={<InventoryIcon fontSize="small" />}
              iconPosition="start"
            />
            <Tab
              label="Suppliers"
              icon={<GroupsIcon fontSize="small" />}
              iconPosition="start"
            />
            <Tab
              label="Price Trends"
              icon={<AnalyticsIcon fontSize="small" />}
              iconPosition="start"
            />
            <Tab
              label="Compare"
              icon={<CompareIcon fontSize="small" />}
              iconPosition="start"
              component={Link}
            to="/compare"
            />
            <Tab
              label="Bulk Orders"
              icon={<LocalShippingIcon fontSize="small" />}
              iconPosition="start"
            />
          </Tabs>
        </Container>
      </CategoryBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Categories Menu */}
      <Menu
        anchorEl={categoriesAnchor}
        open={Boolean(categoriesAnchor)}
        onClose={handleCategoriesClose}
        PaperProps={{
          sx: { width: 300, maxHeight: 400 },
        }}
      >
        {categories.map((category, index) => (
          <MenuItem key={index} onClick={handleCategoriesClose}>
            <ListItemIcon sx={{ color: "#ff6b35" }}>
              {category.icon}
            </ListItemIcon>
            <ListItemText
              primary={category.name}
              secondary={`${category.count} products`}
            />
          </MenuItem>
        ))}
      </Menu>

      {/* User Menu */}
      <Menu
        anchorEl={userMenuAnchor}
        open={Boolean(userMenuAnchor)}
        onClose={handleUserMenuClose}
      >
        <MenuItem onClick={handleUserMenuClose}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </MenuItem>
        <MenuItem onClick={handleUserMenuClose}>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="My Supplier Shop" />
        </MenuItem>
        <MenuItem onClick={handleUserMenuClose}>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="Order History" />
        </MenuItem>
        <MenuItem onClick={handleUserMenuClose}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Favorites" />
        </MenuItem>
        <MenuItem onClick={handleUserMenuClose}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleUserMenuClose}>
          <ListItemText primary="Sign Out" />
        </MenuItem>
      </Menu>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, backgroundColor: "#f5f5f5" }}>
        {children}
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ backgroundColor: "#2c5282", color: "white", py: 4, mt: "auto" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <LogoBox sx={{ mb: 2, color: "white" }}>
                <ConstructionIcon />
                <Typography variant="h6">BuildMart</Typography>
              </LogoBox>
              <Typography variant="body2" sx={{ mb: 2 }}>
                The leading marketplace for construction materials, tools, and
                equipment with 5,000+ verified suppliers.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                Marketplace
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Button
                  color="inherit"
                  size="small"
                  sx={{ justifyContent: "flex-start" }}
                >
                  All Products
                </Button>
                <Button
                  color="inherit"
                  size="small"
                  sx={{ justifyContent: "flex-start" }}
                >
                  Supplier Directory
                </Button>
                <Button
                  color="inherit"
                  size="small"
                  sx={{ justifyContent: "flex-start" }}
                >
                  Price Trends
                </Button>
                <Button
                  color="inherit"
                  size="small"
                  sx={{ justifyContent: "flex-start" }}
                >
                  Product Comparisons
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                For Suppliers
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Button
                  color="inherit"
                  size="small"
                  sx={{ justifyContent: "flex-start" }}
                >
                  Open a Shop
                </Button>
                <Button
                  color="inherit"
                  size="small"
                  sx={{ justifyContent: "flex-start" }}
                >
                  Seller Dashboard
                </Button>
                <Button
                  color="inherit"
                  size="small"
                  sx={{ justifyContent: "flex-start" }}
                >
                  Pricing Plans
                </Button>
                <Button
                  color="inherit"
                  size="small"
                  sx={{ justifyContent: "flex-start" }}
                >
                  Seller Resources
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                Support
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Button
                  color="inherit"
                  size="small"
                  sx={{ justifyContent: "flex-start" }}
                >
                  Help Center
                </Button>
                <Button
                  color="inherit"
                  size="small"
                  sx={{ justifyContent: "flex-start" }}
                >
                  Contact Support
                </Button>
                <Button
                  color="inherit"
                  size="small"
                  sx={{ justifyContent: "flex-start" }}
                >
                  Shipping & Returns
                </Button>
                <Button
                  color="inherit"
                  size="small"
                  sx={{ justifyContent: "flex-start" }}
                >
                  Track Order
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />
          <Typography variant="body2" align="center">
            © 2024 BuildMart. All rights reserved. Serving the construction
            industry since 2024.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default ConstructionLayout;
