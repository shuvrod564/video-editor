import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import "./style.scss"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <Navbar bg="light" expand="lg" className="py-1">
                <Container>
                    <Navbar.Brand> 
                        <Link to='/'> 
                            <img src="images/logo.png" className="img-fluid" alt="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <NavDropdown title="Tools" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Merge</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Compress</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Subtitles</NavDropdown.Item> 
                        </NavDropdown>
                        <Nav.Link href="#home">Pricing</Nav.Link>
                        <Nav.Link href="#link">Resources</Nav.Link>
                        <Nav.Link href="#link" className="btn btn-outline-primary">Sign In</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;