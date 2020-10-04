import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import logo from "../../resources/icons/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <Navbar bg="transparent" variant="light">
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="volunteer-network" srcSet="" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Donation</Nav.Link>
          <Nav.Link href="#pricing">Events</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
          <Nav.Link href="/login">
            <Button variant="primary">Register</Button>
          </Nav.Link>
          <Nav.Link href="/admin">
            <Button variant="dark">Admin</Button>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
