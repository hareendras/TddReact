import React, { Component } from "react";
import { Button } from "react-materialize";

export default class NewRestuarantForm extends Component {
  state = { inputText: "" };
  handleTextChange = event => {
    this.setState({ inputText: event.target.value });
  };
  handleSave = () => {
    const { inputText } = this.state;
    const { onSave } = this.props;
    onSave(inputText);
  };
  render() {
    const { inputText } = this.state;

    return (
      <div>
        <input
          type="text"
          value={inputText}
          onChange={this.handleTextChange}
          data-test="newRetuarantName"
        />
        <Button data-test="saveNewRestuarantButton" onClick={this.handleSave}>
          Save
        </Button>
      </div>
    );
  }
}
