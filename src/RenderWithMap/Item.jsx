import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { hinhAnh, tenPhim } = this.props.data;
    return (
      <div className="col-3">
        <img src={hinhAnh} className="w-100" alt="" />
        <h4>{tenPhim}</h4>
      </div>
    );
  }
}
