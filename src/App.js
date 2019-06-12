import React from "react";

export default class App extends React.Component {
  state = { name: "viewers" };
  render() {
    return <div className="hello">Hello world, {this.state.name}!</div>;
  }
}
