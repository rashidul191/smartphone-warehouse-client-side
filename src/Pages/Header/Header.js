import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          {" "}
          <Navbar.Brand>Smart Phone Warehouse</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link className="mx-3">
              <CustomLink to="/home">Home</CustomLink>
            </Nav.Link>
            
            <Nav.Link className="mx-3">
              <CustomLink to="/inventory">Inventory</CustomLink>
            </Nav.Link>
            <Nav.Link className="mx-3">
              <CustomLink to="/blogs">Blogs</CustomLink>
            </Nav.Link>
            <Nav.Link className="mx-3">
              <CustomLink to="/login">Login</CustomLink>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
