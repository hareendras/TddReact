import React from "react";
import NewRestuarantForm from "./NewRestuarantForm";
import ResturantList from "./ResturantList";
import { Button } from "react-materialize";

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
        <Button
          data-test="addRestuarantButton"
          onClick={this.handleShowNewResturantForm}
        >
          Add Retuarant
        </Button>
        {showNewResturantForm ? (
          <NewRestuarantForm onSave={this.handleAddReturant} />
        ) : null}
        <ResturantList restuarants={restuarantNames} />
      </div>
    );
  }
}
