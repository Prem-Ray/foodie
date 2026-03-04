import React, { useState } from "react";
import { StyledNavbar, Stylednavitems } from "./Navbar.style";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom' ;

export const Title = () => {
  return <h2>Foodie</h2>;
};

export const Navitems = () => {
  return (
    <Stylednavitems>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/hotels">Hotels</Link></li>
      <li>Cart</li>
    </Stylednavitems>
  );
};

export const Navbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <StyledNavbar>
      <Title />
      <Navitems />

      <Button
        variant="contained"
        startIcon={isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
        onClick={() => setLoggedIn(!isLoggedIn)}
        sx={{
             width: "120px",
          textTransform: "none",
          borderRadius: "10px",
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </Button>
    </StyledNavbar>
  );
};
