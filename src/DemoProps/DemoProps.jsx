import React, { Component } from "react";
import Card from "./Card";

export default class DemoProps extends Component {
  state = {
    bgColor: "green",
  };
  handleChange = () => {
    let newColor = this.state.bgColor == "black" ? "green" : "black";
    this.setState({
      bgColor: newColor,
    });
  };
  render() {
    let username = "Alice";
    return (
      <div className="p-5 bg-warning">
        <h3>DemoProps</h3>
        <Card
          bgColor={this.state.bgColor}
          handleClick={this.handleChange}
          name={username}
          color="white"
        />
      </div>
    );
  }
}
