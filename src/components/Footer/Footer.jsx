import { Box, Container, Grid, Typography, Link } from "@mui/material";
import Faq from "./Faq";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

export const Footer = () => {
  const data = useContext(AppContext) ;
  
  return (
    <Box sx={{ bgcolor: "#f5f5f5", mt: 6, pt: 4 }}>
      <Container maxWidth="lg">

        <Grid container spacing={4}>

          {/* Company Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Typography>
              <Link href="#" underline="none">About Us</Link>
            </Typography>
            <Typography>
              <Link href="#" underline="none">Careers</Link>
            </Typography>
            <Typography>
              <Link href="#" underline="none">Blog</Link>
            </Typography>
          </Grid>

          {/* Support Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Typography>
              <Link href="#" underline="none">Help Center</Link>
            </Typography>
            <Typography>
              <Link href="#" underline="none">Contact Us</Link>
            </Typography>
            <Typography>
              <Link href="#" underline="none">FAQs</Link>
            </Typography>
          </Grid>

          {/* Legal Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Typography>
              <Link href="#" underline="none">Privacy Policy</Link>
            </Typography>
            <Typography>
              <Link href="#" underline="none">Terms of Service</Link>
            </Typography>
          </Grid>

         {/* contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography>
              <Link href="#" underline="none">{data.user.email}</Link>
            </Typography>
          </Grid>
        </Grid>

        {/* FAQ Section */}
        <Box sx={{ mt: 6 }}>
          <Faq />
        </Box>

        {/* Copyright */}
        <Box sx={{ textAlign: "center", mt: 4, pb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Food Delivery App. All rights reserved.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};