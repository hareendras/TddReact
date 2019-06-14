import React from "react";
import ResturantListPage from "./ResturantListPage";

export default class App extends React.Component {
  state = { name: "viewers" };
  render() {
    return (
      <div>
        <ResturantListPage />
      </div>
    );
  }
}
