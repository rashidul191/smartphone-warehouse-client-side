import { signOut } from "firebase/auth";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.inti";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);

  // sign out or log out
  const handleSignOut = () => {
    signOut(auth);
  };

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

            {user && (
              <>
                <Nav.Link className="mx-3">
                  <CustomLink to="/manageInventory">Manager Inventory</CustomLink>
                </Nav.Link>
                <Nav.Link className="mx-3">
                  <CustomLink to="/addnewitem">Add New Item</CustomLink>
                </Nav.Link>
              </>
            )}
            <Nav.Link className="mx-3">
              {user ? (
                <button onClick={handleSignOut} className="btn btn-danger">
                  Sign Out
                </button>
              ) : (
                <CustomLink to="/login">Login</CustomLink>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
