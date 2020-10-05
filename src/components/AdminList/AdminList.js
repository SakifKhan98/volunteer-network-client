import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminList = () => {
  const [activties, setActivities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/activityList")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div>
      <Link to="/addEvent">
        <Button>Add A New Event</Button>
      </Link>

      <Container style={{ display: "flex", marginTop: 40 }}>
        <Row>
          <ol>
            {activties.map((actv) => (
              <li>
                {actv.fullName}.... {actv.email} .... {actv.date} ...{" "}
                {actv.selectedActivity}
              </li>
            ))}
          </ol>
        </Row>
      </Container>
    </div>
  );
};

export default AdminList;
