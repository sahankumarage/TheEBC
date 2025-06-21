import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  Tooltip
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import TrendingIcon from '@mui/icons-material/TrendingUp';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const ProductCard = ({ product }) => {
  const hasDiscount = Boolean(product.discount);
  const discountedPrice = hasDiscount
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : null;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: 3,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="180"
          image={product.image}
          alt={product.name}
        />

        {product.isTrending && (
          <Chip
            label="Trending"
            color="primary"
            size="small"
            icon={<TrendingIcon fontSize="small" />}
            sx={{ position: 'absolute', top: 10, left: 10 }}
          />
        )}

        {hasDiscount && (
          <Chip
            label={`${product.discount}% OFF`}
            color="secondary"
            size="small"
            sx={{ position: 'absolute', top: 10, right: 10 }}
          />
        )}

        {product.isNew && (
          <Tooltip title="Brand New Product">
            <Chip
              label="New"
              color="success"
              size="small"
              icon={<NewReleasesIcon fontSize="small" />}
              sx={{ position: 'absolute', bottom: 10, left: 10 }}
            />
          </Tooltip>
        )}

        {product.isBestSeller && (
          <Tooltip title="Best Seller">
            <Chip
              label="Best Seller"
              color="warning"
              size="small"
              icon={<WhatshotIcon fontSize="small" />}
              sx={{ position: 'absolute', bottom: 10, right: 10 }}
            />
          </Tooltip>
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
          {product.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {product.category} • {product.supplier}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <StarIcon sx={{ color: '#ffc107', mr: 0.5 }} />
          <Typography variant="body2">
            {product.rating} ({product.reviews} reviews)
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          {hasDiscount ? (
            <>
              <span style={{ textDecoration: 'line-through', color: '#888', marginRight: 8 }}>
                ${product.price.toFixed(2)}
              </span>
              <span style={{ color: '#d32f2f' }}>${discountedPrice}</span>
            </>
          ) : (
            `$${product.price.toFixed(2)}`
          )}
        </Typography>
      </CardContent>

      <Box sx={{ px: 2, pb: 2 }}>
        <Button fullWidth variant="contained" size="small" color="primary">
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
