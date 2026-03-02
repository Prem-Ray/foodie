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
  We continuously update our restaurant listings to ensure you get the most accurate and latest information.
</Typography>

<Typography variant="body1" paragraph>
  Whether you're craving street food or fine dining, Foodie helps you discover delicious options in just a few clicks.
</Typography>

<Typography variant="body1" paragraph>
  Our goal is to make food exploration fun, simple, and enjoyable for everyone.
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
