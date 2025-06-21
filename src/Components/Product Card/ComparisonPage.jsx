import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  Chip,
  IconButton,
  TextField,
  Autocomplete,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Badge,
  Avatar
} from '@mui/material';
import {
  Close as CloseIcon,
  Search as SearchIcon,
  CompareArrows as CompareIcon,
  Star as StarIcon,
  Store as StoreIcon,
  LocalShipping as ShippingIcon,
  VerifiedUser as VerifiedIcon,
  Favorite as FavoriteIcon,
  ShoppingCart as CartIcon
} from '@mui/icons-material';

// Dummy data for products
const allProducts = [
  {
    id: 1,
    name: 'Portland Cement 50kg Bag',
    brand: 'Lafarge',
    category: 'Cement',
    price: 8.99,
    supplier: 'BuildRight Materials',
    rating: 4.7,
    reviews: 124,
    image: '/cement.jpg',
    specs: {
      strength: '42.5 MPa',
      settingTime: '45 min',
      color: 'Gray',
      packaging: 'PP Bags',
      shelfLife: '6 months'
    },
    delivery: '1-3 days',
    warranty: 'None'
  },
  {
    id: 2,
    name: 'Steel Rebar 12mm x 6m',
    brand: 'Tata Steel',
    category: 'Steel',
    price: 12.50,
    supplier: 'Metro Steel Co.',
    rating: 4.5,
    reviews: 89,
    image: '/rebar.jpg',
    specs: {
      grade: 'Fe 500',
      diameter: '12mm',
      length: '6m',
      yieldStrength: '500 MPa',
      surface: 'Ribbed'
    },
    delivery: '2-5 days',
    warranty: '1 year'
  },
  {
    id: 3,
    name: 'PVC Pipes 1/2" x 10ft',
    brand: 'Astral',
    category: 'Plumbing',
    price: 3.25,
    supplier: 'AquaFlow Systems',
    rating: 4.3,
    reviews: 56,
    image: '/pipes.jpg',
    specs: {
      diameter: '1/2 inch',
      length: '10ft',
      pressureRating: '150 PSI',
      material: 'UV-resistant PVC',
      color: 'White'
    },
    delivery: '1-2 days',
    warranty: '5 years'
  },
  {
    id: 4,
    name: 'Ceramic Floor Tiles (12"x12")',
    brand: 'Kajaria',
    category: 'Tiles',
    price: 2.75,
    supplier: 'Tile Masters Inc.',
    rating: 4.8,
    reviews: 210,
    image: '/tiles.jpg',
    specs: {
      size: '12"x12"',
      thickness: '8mm',
      waterAbsorption: '<3%',
      finish: 'Glossy',
      coverage: '1 sqft per tile'
    },
    delivery: '3-7 days',
    warranty: '10 years'
  },
  {
    id: 5,
    name: 'Portland Cement 50kg Bag',
    brand: 'UltraTech',
    category: 'Cement',
    price: 9.25,
    supplier: 'Cement World',
    rating: 4.6,
    reviews: 187,
    image: '/cement2.jpg',
    specs: {
      strength: '53 MPa',
      settingTime: '30 min',
      color: 'Gray',
      packaging: 'PP Bags',
      shelfLife: '6 months'
    },
    delivery: '2-4 days',
    warranty: 'None'
  },
  {
    id: 6,
    name: 'Steel Rebar 16mm x 6m',
    brand: 'JSW Steel',
    category: 'Steel',
    price: 15.75,
    supplier: 'Steel Solutions',
    rating: 4.4,
    reviews: 76,
    image: '/rebar2.jpg',
    specs: {
      grade: 'Fe 550',
      diameter: '16mm',
      length: '6m',
      yieldStrength: '550 MPa',
      surface: 'Ribbed'
    },
    delivery: '3-6 days',
    warranty: '1 year'
  }
];

const ComparisonPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // Filter products based on search input
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
    product.category.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Add product to comparison
  const addProductToCompare = (product) => {
    if (selectedProducts.length >= 4) return;
    if (!selectedProducts.some(p => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  // Remove product from comparison
  const removeProductFromCompare = (productId) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };

  // Get all unique specification keys from selected products
  const getAllSpecKeys = () => {
    const allKeys = new Set();
    selectedProducts.forEach(product => {
      Object.keys(product.specs).forEach(key => allKeys.add(key));
    });
    return Array.from(allKeys);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Product Comparison
      </Typography>

      {/* Search and selection area */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          {selectedProducts.length > 0 
            ? `Comparing ${selectedProducts.length} products` 
            : 'Select products to compare (up to 4)'}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search products by name, brand or category..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
            }}
          />
          <Button 
            variant="contained" 
            color="primary"
            startIcon={<CompareIcon />}
            disabled={selectedProducts.length < 2}
            sx={{ minWidth: 180 }}
          >
            Compare Now
          </Button>
        </Box>

        {/* Selected products preview */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
          {selectedProducts.map(product => (
            <Paper key={product.id} sx={{ p: 2, width: 200, position: 'relative' }}>
              <IconButton
                size="small"
                sx={{ position: 'absolute', top: 4, right: 4 }}
                onClick={() => removeProductFromCompare(product.id)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar 
                  src={product.image} 
                  sx={{ width: 60, height: 60, mb: 1 }} 
                  variant="rounded"
                />
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  {product.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {product.brand}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 1 }}>
                  ${product.price.toFixed(2)}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Search results */}
        {searchInput && (
          <Paper elevation={2} sx={{ p: 2, mt: 2, maxHeight: 300, overflow: 'auto' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>Search Results:</Typography>
            {filteredProducts.length > 0 ? (
              <Grid container spacing={2}>
                {filteredProducts.map(product => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src={product.image} sx={{ width: 40, height: 40 }} variant="rounded" />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle2">{product.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {product.brand} • {product.category}
                        </Typography>
                      </Box>
                      <Button
                        size="small"
                        disabled={selectedProducts.some(p => p.id === product.id) || selectedProducts.length >= 4}
                        onClick={() => addProductToCompare(product)}
                      >
                        Add
                      </Button>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography variant="body2" color="text.secondary">No products found</Typography>
            )}
          </Paper>
        )}
      </Paper>

      {/* Comparison table */}
      {selectedProducts.length > 0 && (
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
            Product Comparison
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>Specifications</TableCell>
                  {selectedProducts.map(product => (
                    <TableCell key={product.id} sx={{ minWidth: 250 }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Avatar src={product.image} sx={{ width: 80, height: 80, mb: 1 }} variant="rounded" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.brand}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                          <StarIcon sx={{ color: '#ffc107', fontSize: 18, mr: 0.5 }} />
                          <Typography variant="body2">
                            {product.rating} ({product.reviews})
                          </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', my: 1 }}>
                          ${product.price.toFixed(2)}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                          <Button variant="outlined" size="small" startIcon={<StoreIcon />}>
                            View Supplier
                          </Button>
                          <IconButton size="small" color="primary">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton size="small" color="primary">
                            <CartIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Price row */}
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                  {selectedProducts.map(product => (
                    <TableCell key={`price-${product.id}`} sx={{ fontWeight: 'bold' }}>
                      ${product.price.toFixed(2)}
                    </TableCell>
                  ))}
                </TableRow>

                {/* Supplier row */}
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Supplier</TableCell>
                  {selectedProducts.map(product => (
                    <TableCell key={`supplier-${product.id}`}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <VerifiedIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
                        {product.supplier}
                      </Box>
                    </TableCell>
                  ))}
                </TableRow>

                {/* Delivery row */}
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Delivery Time</TableCell>
                  {selectedProducts.map(product => (
                    <TableCell key={`delivery-${product.id}`}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ShippingIcon fontSize="small" sx={{ mr: 1 }} />
                        {product.delivery}
                      </Box>
                    </TableCell>
                  ))}
                </TableRow>

                {/* Warranty row */}
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Warranty</TableCell>
                  {selectedProducts.map(product => (
                    <TableCell key={`warranty-${product.id}`}>{product.warranty}</TableCell>
                  ))}
                </TableRow>

                {/* Technical specifications */}
                {getAllSpecKeys().map(specKey => (
                  <TableRow key={specKey}>
                    <TableCell sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                      {specKey.replace(/([A-Z])/g, ' $1')}
                    </TableCell>
                    {selectedProducts.map(product => (
                      <TableCell key={`${specKey}-${product.id}`}>
                        {product.specs[specKey] || '-'}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Action buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 2 }}>
            <Button 
              variant="outlined" 
              onClick={() => setSelectedProducts([])}
            >
              Clear Comparison
            </Button>
            <Button variant="contained" color="primary">
              Download Comparison
            </Button>
          </Box>
        </Paper>
      )}

      {/* Empty state */}
      {selectedProducts.length === 0 && (
        <Paper elevation={2} sx={{ p: 6, textAlign: 'center' }}>
          <CompareIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            No products selected for comparison
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Search for products above and add them to compare their features, prices, and specifications
          </Typography>
          <Button variant="contained" startIcon={<SearchIcon />}>
            Browse Products
          </Button>
        </Paper>
      )}
    </Container>
  );
};

export default ComparisonPage;