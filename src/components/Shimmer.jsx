import React from "react";
import { Grid, Card, CardContent, Skeleton } from "@mui/material";

export const Shimmer = () => {
  return (
    <Grid container spacing={3} padding={2}>
      {Array.from(new Array(16)).map((_, index) => (
        <Grid item xs={12} sm={6} md={3}  key={index}>
          <Card sx={{ borderRadius: 3 }}>
            {/* Image shimmer */}
            <Skeleton
              variant="rectangular"
              height={160} 
              width={400} 
              animation="wave"
            />

            <CardContent>
              {/* Title */}
              <Skeleton variant="text" height={30} width="80%" />
              {/* Subtitle */}
              <Skeleton variant="text" height={20} width="60%" />
              {/* Rating / price */}
              <Skeleton variant="text" height={20} width="40%" />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
