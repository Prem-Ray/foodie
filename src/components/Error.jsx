import { Alert, AlertTitle, Button, Box } from "@mui/material";

export const Error = ()=>{
    return (
        <Box display="flex" justifyContent="center" mt={4}>
      <Alert severity="error" sx={{ width: "100%", maxWidth: 500 }}>
        <AlertTitle>Error</AlertTitle>
        Something went wrong. Please try again.
      </Alert>
    </Box>
    )
}