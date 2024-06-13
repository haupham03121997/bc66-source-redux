import React, { Component } from "react";
import { movieArr } from "./data";
import Item from "./Item";

export default class RenderWithMap extends Component {
  // những function render phải có return
  renderMovieList = () => {
    // in ra danh sách phim
    let nameArr = movieArr.map((movie, index) => {
      return <Item key={index} data={movie} />;
      return (
        <div className="col-3" key={index}>
          <img src={movie.hinhAnh} className="w-100" alt="" />
          <h4>{movie.tenPhim}</h4>
        </div>
      ); // render của hàm map
    });

    return nameArr;
  };
  render() {
    console.log(movieArr);
    return (
      <div className="container">
        <h3>RenderWithMap</h3>
        <div className="row">{this.renderMovieList()}</div>
      </div>
    );
  }
}

// <tag  props    >     </tag>
