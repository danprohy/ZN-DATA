import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import LogoutSvg from "../../assets/img/logout.svg";
import LogoSvg from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../contexts/AuthContexts";
import { useContext } from "react";

const NavBar = () => {
  // Get username and logout function from AuthContexts
  const {
    authState: {
      user: {username}
    },
    logoutUser,
  } = useContext(AuthContexts);

  const logout = () => logoutUser();

  return (
    <Navbar
      expand="lg"
      bg="success"
      variant="dark"
      className="shadow bg-gradient"
      sticky="top"
    >
      <Navbar.Brand className="text-white font-weight-bolder">
        <img
          src={LogoSvg}
          alt="PlayerLogo"
          width="32"
          height="32"
          className="mx-4"
        />
        PlayerDatabase
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/home"
            as={Link}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/about"
            as={Link}
          >
            About
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="font-weight-bolder text-white" disabled>
            Welcome <span className="text-warning">{username}</span> 
          </Nav.Link>
          <Button
            variant="secondary"
            className="font-weight-bolder text-black mx-4 bg-gradient"
            onClick={logout}
          >
            <img
              src={LogoutSvg}
              alt="Logout"
              width="32"
              height="32"
              className="me-2"
            />
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
