import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { UserContext } from "../../App";
import logo from "../../resources/icons/logo.png";
import "./InsideHeader.css";

const InsideHeader = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="container">
      <Navbar bg="lightgrey" variant="light">
        <Navbar.Brand href="#home">
          <img src={logo} alt="volunteer-network" srcSet="" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Donation</Nav.Link>
          <Nav.Link href="#pricing">Events</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
          <Navbar.Text>
            Signed in as: <storng>{loggedInUser.name}</storng>
          </Navbar.Text>
        </Nav>
      </Navbar>
    </div>
  );
};

export default InsideHeader;
