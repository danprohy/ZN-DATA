import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import LogoutSvg from "../../assets/img/logout.svg";
import LogoSvg from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      bg="success"
      variant="dark"
      className="shadow bg-gradient"
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
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/dashboard"
            as={Link}
          >
            Dashboard
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
            Welcome User
          </Nav.Link>
          <Button
            variant="warning"
            className="font-weight-bolder text-black mx-4"
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
