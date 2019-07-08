import React from "react";
import ResturantListPage from "./ResturantListPage";
import { Col, Row } from "react-materialize";

export default class App extends React.Component {
  state = { name: "viewers" };
  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={10} l={8} offset="m1 l2">
            <ResturantListPage />
          </Col>
        </Row>
      </div>
    );
  }
}
