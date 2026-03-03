import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import WifiOffIcon from "@mui/icons-material/WifiOff";

const OfflineCard = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="70vh"
    >
      <Card
        sx={{
          maxWidth: 400,
          textAlign: "center",
          padding: 3,
          borderRadius: 3,
          boxShadow: 5,
        }}
      >
        <CardContent>
          <WifiOffIcon sx={{ fontSize: 60, color: "error.main", mb: 2 }} />

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            You are Offline
          </Typography>

          <Typography variant="body1" color="text.secondary" mb={3}>
            Please check your internet connection and try again.
          </Typography>

          <Button
            variant="contained"
            color="error"
            onClick={() => window.location.reload()}
          >
            Retry
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OfflineCard;