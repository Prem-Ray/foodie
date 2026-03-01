import { Alert, AlertTitle, Button, Box } from "@mui/material";
import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Alert severity="error" sx={{ width: "100%", maxWidth: 500 }}>
        <AlertTitle>Error</AlertTitle>
        {
          error ? <AlertTitle>
          {error.status} : {error.statusText}
        </AlertTitle> : null 
        }
        Something went wrong. Please try again.
      </Alert>
    </Box>
  );
};
