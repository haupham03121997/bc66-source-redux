import React, { Component } from "react";

export default class HandlingEvent extends Component {
  username = "Alice";
  // event => handleEvent
  //   function : có tham số => bọc lại bằng arrow function / không có tham số

  handleChangeUsername = (newName) => {
    this.username = newName;
    console.log("after change", this.username);
  };
  handleChangeToBobby = () => {
    this.username = "Bobby";
    console.log("after change", this.username);
  };
  render() {
    return (
      <div>
        <h3>HandlingEvent</h3>
        <h2>{this.username}</h2>
        <button
          onClick={() => {
            this.handleChangeUsername("Tommy Tran");
          }}
          className="btn btn-success"
        >
          Change Username
        </button>
        <button onClick={this.handleChangeToBobby} className="btn btn-danger">
          Change to Bobby
        </button>
      </div>
    );
  }
}
// jsx
// trigger
