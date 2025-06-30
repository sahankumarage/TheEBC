import React, { useState } from "react";
import {
  Menu,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Chip,
  Button,
  IconButton,
  Paper,
} from "@mui/material";
import {
  Construction as ConstructionIcon,
  Build as BuildIcon,
  Engineering as EngineeringIcon,
  Business as BusinessIcon,
  Verified as VerifiedIcon,
  Close as CloseIcon,
  TrendingUp as TrendingIcon,
} from "@mui/icons-material";

const EnhancedCategoriesMenu = ({ anchorEl, open, onClose }) => {
  const [activeCategory, setActiveCategory] = useState("Cement & Concrete");

  const mainCategories = [
    { name: "Cement & Concrete", icon: <ConstructionIcon />, count: "2,341" },
    { name: "Steel & Metal", icon: <BuildIcon />, count: "1,876" },
    { name: "Electrical", icon: <EngineeringIcon />, count: "3,452" },
    { name: "Plumbing", icon: <BuildIcon />, count: "1,234" },
    { name: "Tiles & Flooring", icon: <BusinessIcon />, count: "987" },
    { name: "Paint & Finishing", icon: <BuildIcon />, count: "2,143" },
    { name: "Tools & Equipment", icon: <BuildIcon />, count: "5,678" },
    { name: "Safety Equipment", icon: <VerifiedIcon />, count: "432" },
  ];

  const categoryData = {
    "Cement & Concrete": {
      featured: [
        { name: "Portland Cement", icon: "🏗️", trending: true, count: "1,234" },
        { name: "Concrete Mix", icon: "🧱", trending: true, count: "876" },
        { name: "Admixtures", icon: "🧪", count: "543" },
        { name: "Mortar", icon: "🧴", count: "321" },
        { name: "Grout", icon: "🪣", count: "210" },
        { name: "Precast Concrete", icon: "🏢", count: "98" },
        { name: "Cement Blocks", icon: "🧱", count: "456" },
        { name: "Ready Mix Concrete", icon: "🚛", trending: true, count: "789" },
      ]
    },
    "Steel & Metal": {
      featured: [
        { name: "Rebar", icon: "⛓️", trending: true, count: "765" },
        { name: "Structural Steel", icon: "🏗️", count: "432" },
        { name: "Sheet Metal", icon: "📄", count: "321" },
        { name: "Wire Mesh", icon: "🕸️", count: "210" },
        { name: "Metal Studs", icon: "📏", count: "98" },
        { name: "Steel Beams", icon: "🔩", count: "76" },
        { name: "Metal Roofing", icon: "🏠", count: "543" },
        { name: "Stainless Steel", icon: "✨", trending: true, count: "654" },
      ]
    },
    "Electrical": {
      featured: [
        { name: "Wires & Cables", icon: "🔌", trending: true, count: "1,234" },
        { name: "Circuit Breakers", icon: "⚡", count: "876" },
        { name: "Switches & Outlets", icon: "🔘", count: "543" },
        { name: "Conduit & Fittings", icon: "📏", count: "321" },
        { name: "Lighting Fixtures", icon: "💡", count: "210" },
        { name: "Transformers", icon: "⚡", count: "98" },
        { name: "Electrical Panels", icon: "🔋", count: "456" },
        { name: "Generators", icon: "⚡", trending: true, count: "789" },
      ]
    },
    "Plumbing": {
      featured: [
        { name: "Pipes & Fittings", icon: "🚰", trending: true, count: "765" },
        { name: "Valves", icon: "🔧", count: "432" },
        { name: "Water Heaters", icon: "♨️", count: "321" },
        { name: "Fixtures", icon: "🚿", count: "210" },
        { name: "Pumps", icon: "💧", count: "98" },
        { name: "Drainage", icon: "🚽", count: "76" },
        { name: "Water Tanks", icon: "🚰", count: "543" },
        { name: "Plumbing Tools", icon: "🛠️", trending: true, count: "654" },
      ]
    },
    "Tiles & Flooring": {
      featured: [
        { name: "Ceramic Tiles", icon: "🧱", trending: true, count: "1,234" },
        { name: "Porcelain Tiles", icon: "🏺", count: "876" },
        { name: "Marble", icon: "🗿", count: "543" },
        { name: "Vinyl Flooring", icon: "🟫", count: "321" },
        { name: "Laminate", icon: "🪵", count: "210" },
        { name: "Grout & Adhesives", icon: "🧴", count: "98" },
        { name: "Tile Tools", icon: "🛠️", count: "456" },
        { name: "Natural Stone", icon: "⛰️", trending: true, count: "789" },
      ]
    },
    "Paint & Finishing": {
      featured: [
        { name: "Interior Paint", icon: "🎨", trending: true, count: "765" },
        { name: "Exterior Paint", icon: "🏠", count: "432" },
        { name: "Primers", icon: "🖌️", count: "321" },
        { name: "Varnishes", icon: "✨", count: "210" },
        { name: "Wallpaper", icon: "📜", count: "98" },
        { name: "Stains", icon: "🟤", count: "76" },
        { name: "Paint Tools", icon: "🖌️", count: "543" },
        { name: "Specialty Coatings", icon: "🛡️", trending: true, count: "654" },
      ]
    },
    "Tools & Equipment": {
      featured: [
        { name: "Power Tools", icon: "🔌", trending: true, count: "1,234" },
        { name: "Hand Tools", icon: "🛠️", count: "876" },
        { name: "Measuring Tools", icon: "📏", count: "543" },
        { name: "Safety Gear", icon: "⛑️", count: "321" },
        { name: "Construction Equipment", icon: "🚜", count: "210" },
        { name: "Tool Storage", icon: "🧰", count: "98" },
        { name: "Welding Equipment", icon: "🔥", count: "456" },
        { name: "Air Compressors", icon: "💨", trending: true, count: "789" },
      ]
    },
    "Safety Equipment": {
      featured: [
        { name: "Hard Hats", icon: "⛑️", trending: true, count: "765" },
        { name: "Safety Glasses", icon: "👓", count: "432" },
        { name: "Gloves", icon: "🧤", count: "321" },
        { name: "Harnesses", icon: "🪢", count: "210" },
        { name: "Ear Protection", icon: "🎧", count: "98" },
        { name: "Respirators", icon: "😷", count: "76" },
        { name: "Safety Shoes", icon: "👞", count: "543" },
        { name: "High-Vis Clothing", icon: "👕", trending: true, count: "654" },
      ]
    }
  };

  const currentCategoryData = categoryData[activeCategory] || categoryData["Cement & Concrete"];

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { 
          width: '100%',
          height: '70vh',
          maxHeight: '70vh',
          borderRadius: 0,
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          overflow: 'hidden',
          border: '1px solid #e2e8f0',
          marginTop: '16px'
        },
      }}
      transformOrigin={{ horizontal: 'left', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      MenuListProps={{ sx: { p: 0, height: '100%' } }}
    >
      <Box sx={{ display: 'flex', height: '100%' }}>
        {/* Left Sidebar - Categories */}
        <Paper sx={{ 
          width: 250, 
          backgroundColor: '#f8fafc', 
          borderRight: 1, 
          borderColor: 'divider',
          borderRadius: 0,
          elevation: 0,
          overflowY: 'auto'
        }}>
          <List sx={{ p: 1.5 }}>
            {mainCategories.map((category, index) => (
              <ListItem
                key={index}
                button
                onClick={() => setActiveCategory(category.name)}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  py: 1.5,
                  px: 2,
                  backgroundColor: category.name === activeCategory ? 'primary.main' : 'transparent',
                  color: category.name === activeCategory ? 'white' : 'text.primary',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: category.name === activeCategory ? 'primary.dark' : 'action.hover',
                    transform: 'translateX(4px)'
                  }
                }}
              >
                <Box sx={{ 
                  mr: 2, 
                  display: 'flex', 
                  alignItems: 'center',
                  color: category.name === activeCategory ? 'white' : 'primary.main'
                }}>
                  {category.icon}
                </Box>
                <ListItemText 
                  primary={category.name}
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    lineHeight: 1.2
                  }}
                  secondary={category.count}
                  secondaryTypographyProps={{
                    fontSize: '0.75rem',
                    color: category.name === activeCategory ? 'white' : 'text.secondary'
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Right Content Area */}
        <Box sx={{ flex: 1, p: 3, overflowY: 'auto' }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              {activeCategory}
            </Typography>
            <IconButton 
              onClick={onClose}
              sx={{ 
                color: 'text.secondary',
                '&:hover': { backgroundColor: 'action.hover' }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Product Grid */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            {currentCategoryData.featured.map((item, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Card 
                  sx={{ 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    overflow: 'visible',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.12)'
                    }
                  }}
                  onClick={onClose}
                >
                  <CardContent sx={{ 
                    textAlign: 'center', 
                    p: 2, 
                    pb: '16px !important',
                    position: 'relative',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    {item.trending && (
                      <Chip 
                        icon={<TrendingIcon sx={{ fontSize: '0.8rem !important' }} />}
                        label="Hot"
                        size="small" 
                        sx={{ 
                          position: 'absolute',
                          top: -8,
                          right: -8,
                          height: 20,
                          fontSize: '0.7rem',
                          backgroundColor: 'error.main',
                          color: 'white',
                          fontWeight: 'bold',
                          '& .MuiChip-icon': { 
                            color: 'white',
                            marginLeft: '4px'
                          }
                        }} 
                      />
                    )}
                    <Box sx={{ 
                      fontSize: '2.5rem', 
                      mb: 1.5,
                      height: 50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.2s ease',
                      '&:hover': {
                        transform: 'scale(1.1)'
                      }
                    }}>
                      {item.icon}
                    </Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        lineHeight: 1.3,
                        color: 'text.primary',
                        mb: 0.5
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: 'text.secondary',
                        mt: 'auto'
                      }}
                    >
                      {item.count} products
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Footer */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2, borderTop: 1, borderColor: 'divider' }}>
            <Typography variant="body2" color="text.secondary">
              Showing {currentCategoryData.featured.length} subcategories
            </Typography>
            <Button 
              variant="outlined" 
              size="small"
              onClick={onClose}
              endIcon={<Box component="span">→</Box>}
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white'
                }
              }}
            >
              View all categories
            </Button>
          </Box>
        </Box>
      </Box>
    </Menu>
  );
};

export default EnhancedCategoriesMenu;