import React, { Component } from 'react';
import ButtonColor from './ButtonColor';
import ImgCar from './ImgCar';

export default class ExChangeColor2 extends Component {
  state = {
    color: 'red',
  };
  handleChangeColor = (newColor) => {
    this.setState({ color: newColor });
  };

  colorArr = ['red', 'black', 'silver', 'green'];
  renderButtons = () => {
    return this.colorArr.map((color, index) => {
      console.log('color: ', color);
      return (
        <ButtonColor
          handleChange={this.handleChangeColor}
          key={index}
          color={color}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <h3>ExChangeColor2</h3>
        {/* <img
          className="w-25"
          src={`./img_ex/CarBasic/products/${this.state.color}-car.jpg`}
          alt=""
        /> */}
        <ImgCar
          url={`./img_ex/CarBasic/products/${this.state.color}-car.jpg`}
        />
        <div>{this.renderButtons()}</div>
      </div>
    );
  }
}
