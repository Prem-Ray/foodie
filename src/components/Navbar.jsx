import React from 'react' ;
import {StyledNavbar,Stylednavitems} from './Navbar.style'



export const Title = ()=>{
    return (
       <h2>Foodie</h2>
    )
}


export const Navitems = ()=>{
    return (
        <Stylednavitems>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
        </Stylednavitems>
    )
}


export const Navbar = ()=>{
    return (
       <StyledNavbar>
        <Title/>
        <Navitems/>
       </StyledNavbar>
    )
}