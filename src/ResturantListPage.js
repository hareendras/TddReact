import React, { Component } from "react";
import NewResturantForm from "./NewRestuarantForm";

export default class ResturantListPage extends Component {
  render() {
    return (
      <div>
        <button data-test="addRestuarantButton">Add Retuarant</button>
        <NewResturantForm />
      </div>
    );
  }
}
