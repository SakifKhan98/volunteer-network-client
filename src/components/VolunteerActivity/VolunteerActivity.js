import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./VolunteerActivity.css";

const VolunteerActivity = (props) => {
  const { image, name, id, color } = props.activity;

  return (
    <>
      <Col md={6} lg={3}>
        <Card
          className="activityCard"
          style={{ marginTop: 20, marginBottom: 20 }}
        >
          <Card.Img style={{ width: "100%", height: "100%" }} src={image} />
          <Card.Footer style={{ backgroundColor: color, color: "white" }}>
            {name}
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default VolunteerActivity;
