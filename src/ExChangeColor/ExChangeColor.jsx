import React, { Component } from "react";

export default class ExChangeColor extends Component {
  state = {
    color: "red",
  };
  handleChangeColor = (newColor) => {
    this.setState({
      color: newColor,
    });
  };
  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-4">
            <img
              className="w-100"
              src={`./img_ex/CarBasic/products/${this.state.color}-car.jpg`}
              alt=""
            />
          </div>

          <div className="col-6">
            <button
              onClick={() => {
                this.handleChangeColor("red");
              }}
              className="btn-danger "
            >
              Red
            </button>
            <button
              onClick={() => {
                this.handleChangeColor("silver");
              }}
              className="btn-secondary "
            >
              Silver
            </button>
            <button
              onClick={() => {
                this.handleChangeColor("black");
              }}
              className="btn-dark "
            >
              Black
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// cách sử dụng thẻ img nằm trong folder public => dẫn đường dẫn từ file index.html ( không quan tâm đến vị trí file chứa component hiện tại)
