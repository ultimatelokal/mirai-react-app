import React, { useState } from 'react';
import './Navbar.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="custom-navbar"
      fixed="top"
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#" className="me-3">
          Miraitech
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`custom-collapse ${expanded ? 'show' : ''}`}
        >
          <Nav className="ms-auto text-start flex-lg-row flex-column align-items-lg-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="#cctv">CCTV Installation</NavDropdown.Item>
              <NavDropdown.Item href="#networking">Networking</NavDropdown.Item>
              <NavDropdown.Item href="#web">Web Development</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
