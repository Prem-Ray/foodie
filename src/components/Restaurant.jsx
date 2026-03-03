import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constant";

import {
  Container,
  Paper,
  Grid,
  Typography,
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import  useGeoLocation  from "../hooks/useGeoLocation";

export const Restaurant = () => {
  const { resId } = useParams();
  const {latitude,longitude} = useGeoLocation() ;
  const restaurant = useRestaurantMenu(resId,latitude,longitude);

  if (!restaurant) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  // Restaurant name
  const restaurantName = restaurant?.data?.cards?.[0]?.card?.card?.text;

  // Main restaurant info
  const mainRestaurantInfoCard = restaurant?.data?.cards?.find(
    (cardWrapper) =>
      cardWrapper?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  );

  const mainRestaurantInfo = mainRestaurantInfoCard?.card?.card?.info;

  const imageId = mainRestaurantInfo?.cloudinaryImageId;

  const menuItems =
    restaurant?.data?.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
        (card) => card?.card?.card?.itemCards || [],
      )
      ?.map((item) => item?.card?.info) || [];

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Grid container spacing={4}>
          {/* Image Section */}
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              height="250"
              image={IMG_URL + imageId}
              alt={restaurantName}
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          {/* Info Section */}
          <Grid item xs={12} md={7}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {restaurantName}
            </Typography>

            <Typography variant="body1" color="text.secondary" gutterBottom>
              {mainRestaurantInfo?.cuisines?.join(", ")}
            </Typography>

            <Typography variant="body2" sx={{ mt: 1 }}>
              ⭐ Rating: {mainRestaurantInfo?.avgRatingString}
            </Typography>

            <Typography variant="body2">
              💰 Cost for Two: {mainRestaurantInfo?.costForTwoMessage}
            </Typography>

            <Typography variant="body2">
              🚚 Delivery Time: {mainRestaurantInfo?.sla?.slaString}
            </Typography>

            <Typography variant="body2" sx={{ mt: 2 }}>
              📍 Address:{" "}
              {
                mainRestaurantInfo?.labels?.find(
                  (label) => label.title === "Address",
                )?.message
              }
            </Typography>
          </Grid>
        </Grid>

        {/* ✅ Menu Section */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>
            Menu
          </Typography>

          {menuItems.length > 0 ? (
            <List>
              {menuItems.map((item) => (
                <React.Fragment key={item?.id}>
                  <ListItem>
                    <ListItemText
                      primary={item?.name}
                      secondary={`₹${
                        (item?.price || item?.defaultPrice || 0) / 100
                      }`}
                    />
                    {/* Image Section */}
                    <Grid item xs={12} md={5}>
                      <CardMedia
                        component="img"
                        height="250"
                        image={IMG_URL + item?.imageId}
                        alt={restaurantName}
                        sx={{ borderRadius: 2 }}
                      />
                    </Grid>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No menu items found.
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
};
