import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    number: 1,
  };
  //   update data state => this.setState ( cách duy nhất )
  //   this.setState ~ bất đồng bộ
  handleTang = () => {
    this.setState(
      {
        number: this.state.number + 1,
      },
      () => {
        console.log("data mới nhất", this.state.number);
      }
    );
    console.log(this.state.number);
  };

  render() {
    return (
      <div>
        <h3>DemoState</h3>
        <h2>Number {this.state.number}</h2>
        <button onClick={this.handleTang}>+</button>
      </div>
    );
  }
}

// re-render => layout trang web được update lại

// sau khi this.setState chạy xong thì sẽ gọi lại render()
// re-render => this.setState => chạy lại render()

// re-render vô tận : this.setState => render , nếu trong quá trình render() chạy trigger this.setState
