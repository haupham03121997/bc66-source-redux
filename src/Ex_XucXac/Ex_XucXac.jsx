import { List } from "antd";
import React, { Component } from "react";
import ListXucXac from "./ListXucXac";
import KetQua from "./KetQua";
import "./index.scss";
import { TAI, XIU } from "./constant";
export default class Ex_XucXac extends Component {
  state = {
    numberArr: [3, 3, 3],
    choose: null,
    countTurn: 0,
    countWin: 0,
  };
  // >= 11 => Tài
  handlePlayGame = () => {
    let max = 6;
    let min = 1;
    let total = 0;
    let newNumberArr = this.state.numberArr.map((number) => {
      let random = Math.floor(Math.random() * (max - min + 1) + min);
      total += random;
      return random;
    });
    // xử lý so sánh  lựa chọn với kết quả cuối cùng
    // nếu kết quả trên 11 và user chọn tài thì setState tăng  số số bàn thắng
    total >= 11 &&
      this.state.choose == TAI &&
      this.setState({ countWin: this.state.countWin + 1 });
    // nếu kết quả dưới 11 và user chọn xỉu thì setState tăng  số số bàn thắng
    total < 11 &&
      this.state.choose == XIU &&
      this.setState({ countWin: this.state.countWin + 1 });
    //
    this.setState({
      numberArr: newNumberArr,
      countTurn: this.state.countTurn + 1,
    });
  };
  handleChoose = (choose) => {
    this.setState({
      choose: choose,
    });
  };

  render() {
    return (
      <div className="ex-game">
        <ListXucXac
          handleChoose={this.handleChoose}
          handlePlayGame={this.handlePlayGame}
          data={this.state.numberArr}
        />
        <KetQua
          countWin={this.state.countWin}
          countTurn={this.state.countTurn}
          choose={this.state.choose}
        />
      </div>
    );
  }
}
