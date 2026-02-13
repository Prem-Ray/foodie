import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";

const EmptyResult = ({
  title = "No Results Found",
  description = "We couldn’t find anything matching your search.",
  showAction = false,
  actionLabel = "Reset",
  onAction,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      py={8}
      px={2}
    >
      <SearchOffIcon sx={{ fontSize: 80, color: "#bdbdbd", mb: 2 }} />

      <Typography variant="h6" fontWeight={600} gutterBottom>
        {title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ maxWidth: 400 }}
        gutterBottom
      >
        {description}
      </Typography>

      {showAction && (
        <Button
          variant="contained"
          sx={{ mt: 2, borderRadius: "10px", textTransform: "none" }}
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </Box>
  );
};

export default EmptyResult;
