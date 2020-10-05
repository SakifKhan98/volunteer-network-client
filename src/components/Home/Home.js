import React from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import VolunteerActivities from "../VolunteerActivities/VolunteerActivities";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <SearchBar></SearchBar>
      <VolunteerActivities></VolunteerActivities>
    </div>
  );
};

export default Home;
