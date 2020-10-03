import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../resources/icons/logo.png";
import "./VolunteerRegister.css";

const VolunteerRegister = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={{ span: 6 }}>
          <div style={{ marginBottom: 30 }}>
            <center>
              <img src={logo} alt="" />
            </center>
            <h1 style={{ overflow: "hidden", paddingBottom: "30px" }}>
              Register As A Volunteer
            </h1>
            <Form>
              <Form.Group controlId="formGroupFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Username or Email</Form.Label>
                <Form.Control type="password" placeholder="Username or Email" />
              </Form.Group>
              <Form.Group controlId="formGroupDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Date" />
              </Form.Group>
              <Form.Group controlId="formGroupDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Selected Service</Form.Label>
                <Form.Control type="text" placeholder="Selected Service" />
              </Form.Group>
            </Form>
            <Link to="/selectedActivities">
              <Button>Registration</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VolunteerRegister;
