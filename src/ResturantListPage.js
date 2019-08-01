import React from "react";
import NewRestuarantForm from "./NewRestuarantForm";
import ResturantList from "./ResturantList";
import { Button, Col, Row, Modal } from "react-materialize";

export default class ResturantListPage extends React.Component {
  state = { restuarantNames: [], showNewResturantForm: false };
  handleAddReturant = newRetuarantName => {
    this.setState(state => ({
      showNewResturantForm: false,
      restuarantNames: [newRetuarantName, ...state.restuarantNames]
    }));
    $("#addRestaurantModel").modal("close");
  };

  handleShowNewResturantForm = () => {
    this.setState({ showNewResturantForm: true });
  };

  /*renderNewRestuarantForm = () => {
    if (this.state.showNewResturantForm) {
      return <NewRestuarantForm onSave={this.handleAddReturant} />;
    }
  };*/
  render() {
    const { restuarantNames } = this.state;
    return (
      <div>
        <Modal
          id="addRestaurantModel"
          header="New Restaurant"
          trigger={
            <Button data-test="addRestuarantButton">Add Retuarant</Button>
          }
        >
          <NewRestuarantForm onSave={this.handleAddReturant} />{" "}
        </Modal>
        <Row>
          <ResturantList restuarants={restuarantNames} />
        </Row>
      </div>
    );
  }
}
