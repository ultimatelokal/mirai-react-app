import 'bootstrap/dist/css/bootstrap.min.css'; // Classic Bootstrap
import React, { useState } from 'react';
import './Navbar.css';
import './LogoHover.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavbarMain = () => {
  const [hovered, setHovered] = useState(false);

  return (
<Navbar expand="lg" className="navbar-main main-navbar">
  <Container 
  className="
    d-flex 
    justify-content-start 
    align-items-center">
    
    {/* Logo */}
      <Navbar.Brand
  href="#"
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  className="logo-hover"
>
  <div className="logo-container">
    {hovered ? (
      <span key="hovered" className="logo-text-1 fade-slide-in">
        mirai<span className="tech-red">TECH</span>
      </span>
    ) : (
      <span key="default" className="logo-text-2 fade-slide-in">
        <span className="mirai-red">Mirai</span>tech
      </span>
    )}
  </div>
</Navbar.Brand>

    {/* Navigation Links */}
    <Nav className="
      d-flex flex-row 
      align-items-center">
      <Nav.Link href="#home" className="me-3">Home</Nav.Link>
      <Nav.Link href="#about" className="me-3">About</Nav.Link>

      <NavDropdown title="Services" id="services-dropdown" className="me-3">
        <NavDropdown.Item href="#cctv">CCTV Installation</NavDropdown.Item>
        <NavDropdown.Item href="#networking">Networking</NavDropdown.Item>
        <NavDropdown.Item href="#web">Web Development</NavDropdown.Item>
      </NavDropdown>

      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    
    <Nav className="
          ms-auto text-start 
          flex-lg-row flex-column 
          align-items-lg-center">
      <Nav.Link href='#email' className="me-3">Call Us</Nav.Link>
      <Nav.Link href='#email' className="me-3">Email Us</Nav.Link>
    </Nav>


  </Container>
</Navbar>
  );
};

export default NavbarMain;
