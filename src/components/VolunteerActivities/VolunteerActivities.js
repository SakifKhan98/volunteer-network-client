import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { fakeData } from "../../fakeData/fakeData";
import InsideHeader from "../InsideHeader/InsideHeader";
import VolunteerActivity from "../VolunteerActivity/VolunteerActivity";
import "./VolunteerActivities.css";

const VolunteerActivities = () => {
  const [activties, setActivities] = useState(fakeData);
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
