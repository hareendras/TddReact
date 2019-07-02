import React, { Component } from "react";
import NewResturantForm from "./NewRestuarantForm";
import RestuarantList from "./ResturantList";
import { Button } from "react-materialize";

export default class ResturantListPage extends Component {
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
        <Button
          data-test="addRestuarantButton"
          onClick={this.handleShowNewResturantForm}
        >
          Add Retuarant
        </Button>
        {showNewResturantForm ? (
          <NewResturantForm onSave={this.handleAddReturant} />
        ) : null}
        <RestuarantList restuarants={restuarantNames} />
      </div>
    );
  }
}
