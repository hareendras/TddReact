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

  renderNewRestuarantForm = () => {
    if (this.state.showNewResturantForm) {
      return <NewRestuarantForm onSave={this.handleAddReturant} />;
    }
  };
  render() {
    const { restuarantNames } = this.state;
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
        <Row>{this.renderNewRestuarantForm()}</Row>
        <Row>
          <ResturantList restuarants={restuarantNames} />
        </Row>
      </div>
    );
  }
}
