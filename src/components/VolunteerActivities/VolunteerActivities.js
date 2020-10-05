import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import VolunteerActivity from "../VolunteerActivity/VolunteerActivity";
import "./VolunteerActivities.css";

const VolunteerActivities = () => {
  const [activties, setActivities] = useState([]);

  useEffect(() => {
    fetch("https://infinite-badlands-94198.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <Container style={{ display: "flex", marginTop: 40 }}>
      <Row>
        {activties.map((actv) => (
          <VolunteerActivity key={actv.id} activity={actv}></VolunteerActivity>
        ))}
      </Row>
    </Container>
  );
};

export default VolunteerActivities;
