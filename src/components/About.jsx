import { Box, Typography, Container, Paper } from "@mui/material";
import { Navbar } from "./Navbar";

export const About = () => {
  return (
    <>
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Foodie 🍽️
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to <strong>Foodie</strong> — your ultimate destination for
          discovering the best restaurants around you.
        </Typography>

        <Typography variant="body1" paragraph>
          Our mission is simple: help food lovers explore amazing cuisines,
          compare ratings, and find their perfect dining experience.
        </Typography>

        <Typography variant="body1" paragraph>
          Built using React and modern UI technologies, Foodie ensures a
          seamless and responsive experience across all devices.
        </Typography>

        <Typography variant="h6" mt={3}>
          🚀 Features:
        </Typography>

        <ul>
          <li>Search restaurants instantly</li>
          <li>Filter by ratings</li>
          <li>Beautiful and responsive UI</li>
          <li>Fast loading with shimmer effects</li>
        </ul>

        <Typography variant="body2" mt={4} color="text.secondary">
          Made with ❤️ by Premanshu Ray
        </Typography>
      </Paper>
    </Container>
     </>
  );
};
