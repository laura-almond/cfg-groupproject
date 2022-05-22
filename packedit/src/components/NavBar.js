import React from "react";
import "../styles/NavBar.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logoPath from "../styles/Images/Logos/full-logo.png";

function NavBar() {
  return (
    <div className="position-absolute top-0">
      <Navbar className="py-4 px-3" data-testid="NavBar" bg="light" expand="lg" fixed="top">
        <div>
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logoPath}
                width="18%"
                height="20%"
                className="d-inline-block align-top"
                alt="PackedIt Logo"
              />
            </Navbar.Brand>
          </Container>
        </div>
        <div className="position-absolute end-0">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto px-5">
                <Nav.Link className="li" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="li" href="/your-list">
                  Your List
                </Nav.Link>
                <Nav.Link className="li" href="/about">
                  About
                </Nav.Link>
                <Nav.Link className="li" href="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
