import React, { Component } from "react";
import NewResturantForm from "./NewRestuarantForm";
import RestuarantList from "./ResturantList";

export default class ResturantListPage extends Component {
  state = { restuarantNames: [] };
  handleAddReturant = newRetuarantName => {
    this.setState(state => ({
      restuarantNames: [newRetuarantName, ...state.restuarantNames]
    }));
  };
  render() {
    const { restuarantNames } = this.state;
    return (
      <div>
        <button data-test="addRestuarantButton">Add Retuarant</button>
        <NewResturantForm onSave={this.handleAddReturant} />
        <RestuarantList restuarants={restuarantNames} />
      </div>
    );
  }
}
