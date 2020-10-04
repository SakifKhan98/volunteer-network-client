import React from "react";
import { fakeData } from "../../fakeData/fakeData";

const AddEvent = () => {
  const handleAddActivity = () => {
    fetch("http://localhost:5000/addActivity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fakeData),
    });
  };
  return (
    <div>
      <button onClick={handleAddActivity}>Add Activity</button>
    </div>
  );
};

export default AddEvent;
