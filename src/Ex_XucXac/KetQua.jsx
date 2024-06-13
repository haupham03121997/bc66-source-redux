import React, { Component } from "react";

export default class KetQua extends Component {
  render() {
    let { choose, countTurn, countWin } = this.props;
    return (
      <div className="pt-5 text-center">
        {choose && <h1>Bạn chọn {choose}</h1>}
        <h1>Số lượt chợi {countTurn}</h1>
        <h1>Số lượt thắng {countWin}</h1>
      </div>
    );
  }
}
