import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

export const StyledNavbar = styled(AppBar)(({ theme }) => ({
  position:'static',
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  color: "black",
  padding: "0 4.3rem",
  width: 'full',
  border: '1px solid black'
}));

export const Stylednavitems = styled("ul")(() => ({
  listStyleType: "none",
  display: "flex",
  gap: "1.5rem",
}));
