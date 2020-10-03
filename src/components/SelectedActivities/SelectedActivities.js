import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { fakeData } from "../../fakeData/fakeData";
import InsideHeader from "../InsideHeader/InsideHeader";
import SelectedActivity from "../SelectedActivity/SelectedActivity";

const SelectedActivities = () => {
  const [activties, setActivities] = useState(fakeData);

  return (
    <div>
      <InsideHeader></InsideHeader>
      <Container style={{ display: "flex", marginTop: 40 }}>
        <Row>
          {activties.map((actv) => (
            <SelectedActivity key={actv.id} activity={actv}></SelectedActivity>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SelectedActivities;
