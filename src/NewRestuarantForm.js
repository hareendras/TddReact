import React, { Component } from "react";
import { Button, TextInput, Row, Col } from "react-materialize";

export default class NewRestuarantForm extends React.Component {
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
        <TextInput
          s={12}
          m={8}
          l={10}
          label="Restuarant Name"
          value={inputText}
          onChange={this.handleTextChange}
          data-test="newRetuarantName"
        />
        <Button
          s={12}
          m={4}
          l={2}
          data-test="saveNewRestuarantButton"
          onClick={this.handleSave}
        >
          Save
        </Button>
      </div>
    );
  }
}
