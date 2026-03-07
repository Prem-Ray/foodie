import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How do I place an order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Browse restaurants or dishes, add items to your cart, and proceed
            to checkout. After selecting your payment method, confirm your
            order to start delivery.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What payment methods are accepted?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We accept credit cards, debit cards, UPI, digital wallets, and cash
            on delivery depending on your location.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How can I track my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            After placing an order, you can track it from the Orders section
            where you will see live updates about preparation and delivery.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Can I cancel or modify my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Orders can be cancelled or modified within a short time after
            placing them, before the restaurant starts preparing the food.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What should I do if my order is late?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If your order is delayed, please contact customer support through
            the Help Center and we will assist you immediately.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default Faq;