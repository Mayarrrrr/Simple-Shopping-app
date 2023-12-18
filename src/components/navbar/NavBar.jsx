import React from "react";
import './navbar.css';
import logo from "../../imgs/logo.png";
import {ShoppingCart} from "phosphor-react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return ( 
        <div> 
            <Navbar bg="dark" data-bs-theme="dark" style={{boxShadow:'0 0 10px 5px #a09fa0'}}>
            <Container>
            <Navbar.Brand href="/">
            <img
              src={logo}
              width="65"
              height="55"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/" className="active">Home</Nav.Link>
                    <Nav.Link href="#link">Products</Nav.Link>
                    <Nav.Link href="#link">Offers</Nav.Link>
                    <Nav.Link href="cart"><ShoppingCart size={32}/></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>    
        </div>
     );
}
 
export default NavBar;