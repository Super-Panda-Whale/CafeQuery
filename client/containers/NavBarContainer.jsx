import React, { useState } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import option1 from '../assets/option1.png';

function NavBarContainer() {
  const [isLoggedIn, setLogin] = useState(false);



  return (
    <Navbar className="navbar" expand="lg">
    <img src={option1} className="icon" alt=""/>
    <LinkContainer to="/">
        <Navbar.Brand>CafeQuery</Navbar.Brand>
    </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="homepage">
    <LinkContainer to="/">
        <Nav.Link>Find A Location</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/add">
        <Nav.Link>Add a Location</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/login">
        <Nav.Link id='nav-login'>Log In</Nav.Link>
    </LinkContainer> 
    <LinkContainer to="/signup">
        <Nav.Link>Sign Up</Nav.Link>
    </LinkContainer>   
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBarContainer;
