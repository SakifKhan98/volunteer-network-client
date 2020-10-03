import React from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <center>
      <h1 style={{ overflow: "hidden" }}>I GROW BY HELPING PEOPLE IN NEED.</h1>

      <Row className="justify-content-center searchBar">
        <Col xs={12} sm={6} md={4} lg={4}>
          <Form inline>
            <FormControl
              id="searchBar"
              type="text"
              placeholder="Search...."
              className=" ml-sm-2"
            />
            <Button type="submit">Search</Button>
          </Form>
        </Col>
      </Row>
    </center>
  );
};

export default SearchBar;
