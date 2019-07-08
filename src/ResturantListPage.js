import React from "react";
import NewRestuarantForm from "./NewRestuarantForm";
import ResturantList from "./ResturantList";
import { Button, Col, Row } from "react-materialize";

export default class ResturantListPage extends React.Component {
  state = { restuarantNames: [], showNewResturantForm: false };
  handleAddReturant = newRetuarantName => {
    this.setState(state => ({
      showNewResturantForm: false,
      restuarantNames: [newRetuarantName, ...state.restuarantNames]
    }));
  };

  handleShowNewResturantForm = () => {
    this.setState({ showNewResturantForm: true });
  };
  render() {
    const { restuarantNames, showNewResturantForm } = this.state;
    return (
      <div>
        <Row>
          <Button
            data-test="addRestuarantButton"
            onClick={this.handleShowNewResturantForm}
          >
            Add Retuarant
          </Button>
        </Row>
        <Row>
          {showNewResturantForm ? (
            <NewRestuarantForm onSave={this.handleAddReturant} />
          ) : null}
        </Row>
        <Row>
          <ResturantList restuarants={restuarantNames} />
        </Row>
      </div>
    );
  }
}
