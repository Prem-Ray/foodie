import React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Button, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions,
  Rating,
  Chip,
  Stack
} from "@mui/material";

// 1. Create some mock data to map through
const hotelData = [
  {
    id: 1,
    name: "The Grand Plaza",
    location: "Downtown City Center",
    price: 150,
    rating: 4.5,
    tag: "Luxury",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80",
  },
  {
    id: 2,
    name: "Cozy Stay Inn",
    location: "Suburbs",
    price: 65,
    rating: 3.8,
    tag: "Budget",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&q=80",
  },
  {
    id: 3,
    name: "Oceanview Resort",
    location: "Beachfront",
    price: 280,
    rating: 5.0,
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80",
  },
];

export default function Hotels() {
  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      {/* Header Section */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Explore All Hotels 🏨
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Find the perfect place to stay from our curated list of luxury, budget, and boutique hotels.
        </Typography>
      </Box>

      {/* Grid of Hotels */}
      <Grid container spacing={4}>
        {hotelData.map((hotel) => (
          <Grid item key={hotel.id} xs={12} sm={6} md={4}>
            
            {/* Hotel Card */}
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, elevation: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={hotel.image}
                alt={hotel.name}
              />
              
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="h6" fontWeight="bold">
                    {hotel.name}
                  </Typography>
                  <Chip label={hotel.tag} size="small" color="primary" variant="outlined" />
                </Stack>
                
                <Typography variant="body2" color="text.secondary" mb={2}>
                  📍 {hotel.location}
                </Typography>
                
                <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                  <Rating value={hotel.rating} precision={0.5} readOnly size="small" />
                  <Typography variant="body2" fontWeight="bold">
                    {hotel.rating}
                  </Typography>
                </Stack>
                
                <Typography variant="h6" color="primary" fontWeight="bold">
                  ${hotel.price} <Typography component="span" variant="body2" color="text.secondary">/ night</Typography>
                </Typography>
              </CardContent>
              
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button variant="contained" fullWidth disableElevation sx={{ borderRadius: 2 }}>
                  Book Now
                </Button>
              </CardActions>
            </Card>

          </Grid>
        ))}
      </Grid>
    </Container>
  );
}