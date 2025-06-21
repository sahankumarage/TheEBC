import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Avatar,
  Stack,
  Divider,
  Paper
} from '@mui/material';
import {
  Star as StarIcon,
  LocationOn as LocationIcon,
  Construction as ConstructionIcon,
  LocalShipping as ShippingIcon,
  VerifiedUser as VerifiedIcon,
  TrendingUp as TrendingIcon,
  Store as StoreIcon
} from '@mui/icons-material';
import ProductCard from '../Components/Product Card/ProductCard';

 // Dummy data for products
const featuredProducts = [
    {
        id: 1,
        name: 'Portland Cement 50kg Bag',
        title: 'Portland Cement 50kg Bag',
        category: 'Cement',
        price: 8.99,
        supplier: 'BuildRight Materials',
        rating: 4.7,
        reviews: 124,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        isTrending: true,
        discount: 10
    },
    {
        id: 2,
        name: 'Steel Rebar 12mm x 6m',
        title: 'Steel Rebar 12mm x 6m',
        category: 'Steel',
        price: 12.50,
        supplier: 'Metro Steel Co.',
        rating: 4.5,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        isNew: true
    },
    {
        id: 3,
        name: 'PVC Pipes 1/2" x 10ft',
        title: 'PVC Pipes 1/2" x 10ft',
        category: 'Plumbing',
        price: 3.25,
        supplier: 'AquaFlow Systems',
        rating: 4.3,
        reviews: 56,
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        isBestSeller: true
    },
    {
        id: 4,
        name: 'Ceramic Floor Tiles (12"x12")',
        title: 'Ceramic Floor Tiles (12"x12")',
        category: 'Tiles',
        price: 2.75,
        supplier: 'Tile Masters Inc.',
        rating: 4.8,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        discount: 15
    }
];

// Dummy data for suppliers
const featuredSuppliers = [
    {
        id: 1,
        name: 'BuildRight Materials',
        location: 'New York, NY',
        rating: 4.8,
        products: 342,
        yearsActive: 12,
        logo: 'https://randomuser.me/api/portraits/men/32.jpg',
        specialties: ['Cement', 'Concrete', 'Aggregates']
    },
    {
        id: 2,
        name: 'Metro Steel Co.',
        location: 'Chicago, IL',
        rating: 4.6,
        products: 215,
        yearsActive: 8,
        logo: 'https://randomuser.me/api/portraits/men/45.jpg',
        specialties: ['Rebar', 'Structural Steel', 'Metal Sheets']
    },
    {
        id: 3,
        name: 'AquaFlow Systems',
        location: 'Houston, TX',
        rating: 4.5,
        products: 178,
        yearsActive: 5,
        logo: 'https://randomuser.me/api/portraits/women/65.jpg',
        specialties: ['PVC Pipes', 'Fittings', 'Valves']
    }
];

// Dummy data for categories
const popularCategories = [
  { name: 'Cement & Concrete', count: 2341, icon: <ConstructionIcon /> },
  { name: 'Steel & Metal', count: 1876, icon: <ConstructionIcon /> },
  { name: 'Plumbing', count: 1452, icon: <ConstructionIcon /> },
  { name: 'Electrical', count: 1234, icon: <ConstructionIcon /> },
  { name: 'Tiles & Flooring', count: 987, icon: <ConstructionIcon /> },
  { name: 'Tools & Equipment', count: 2567, icon: <ConstructionIcon /> }
];

const HomePage = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Paper elevation={0} sx={{
        p: 4,
        mb: 4,
        background: 'linear-gradient(135deg, #1a365d 0%, #3a7bd5 100%)',
        color: 'white',
        borderRadius: 2
      }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={6}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Construction Materials Marketplace
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Source quality materials from verified suppliers at competitive prices
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" size="large" color="secondary">
                Browse Products
              </Button>
              <Button variant="outlined" size="large" sx={{ color: 'white', borderColor: 'white' }}>
                Become a Supplier
              </Button>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Box sx={{
              height: 300,
              backgroundImage: 'url(/construction-hero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2
            }} />
          </Grid>
        </Grid>
      </Paper>

      {/* Featured Products */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={product} />
        </Grid>
          ))}
        </Grid>
      </Box>

      {/* Popular Categories */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Popular Categories
        </Typography>
        <Grid container spacing={2}>
          {popularCategories.map((category, index) => (
            <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
              <Paper sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }
              }}>
                <Box sx={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#ebf8ff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2
                }}>
                  {React.cloneElement(category.icon, { sx: { color: '#3182ce', fontSize: 30 } })}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {category.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {category.count} products
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Featured Suppliers */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Trusted Suppliers
        </Typography>
        <Grid container spacing={3}>
          {featuredSuppliers.map((supplier) => (
            <Grid item key={supplier.id} xs={12} md={4}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar src={supplier.logo} sx={{ width: 60, height: 60, mr: 2 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {supplier.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <LocationIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                      {supplier.location}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <VerifiedIcon color="primary" fontSize="small" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    Verified Supplier • {supplier.yearsActive} years in business
                  </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                    <StarIcon sx={{ color: '#ffc107', mr: 0.5 }} />
                    {supplier.rating} Rating • {supplier.products} Products
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Specializes in:
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                    {supplier.specialties.map((specialty, index) => (
                      <Chip key={index} label={specialty} size="small" />
                    ))}
                  </Stack>
                </Box>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<StoreIcon />}
                  onClick={() => console.log(`Visit ${supplier.name} shop`)}
                >
                  Visit Supplier Shop
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Value Propositions */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
            <Box sx={{
              width: 80,
              height: 80,
              backgroundColor: '#ebf8ff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 2
            }}>
              <VerifiedIcon sx={{ color: '#3182ce', fontSize: 40 }} />
            </Box>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Verified Suppliers
            </Typography>
            <Typography>
              All our suppliers undergo strict verification to ensure quality and reliability for your projects.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
            <Box sx={{
              width: 80,
              height: 80,
              backgroundColor: '#fff5f5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 2
            }}>
              <TrendingIcon sx={{ color: '#e53e3e', fontSize: 40 }} />
            </Box>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Price Transparency
            </Typography>
            <Typography>
              Compare prices across multiple suppliers and view historical pricing trends to get the best deals.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
            <Box sx={{
              width: 80,
              height: 80,
              backgroundColor: '#f0fff4',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 2
            }}>
              <ShippingIcon sx={{ color: '#38a169', fontSize: 40 }} />
            </Box>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Reliable Logistics
            </Typography>
            <Typography>
              Get your materials delivered on time with our network of trusted logistics partners.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;