import React, { Component } from "react";

export default class ImgCar extends Component {
  render() {
    return <img className="w-25" src={this.props.url} alt="" />;
  }
}
