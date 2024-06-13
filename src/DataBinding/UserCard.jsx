import React, { Component, Fragment } from "react";

export default class UserCard extends Component {
  // tạo data trong class ko dùng let, dùng this
  username = "Alice Nguyễn";

  render() {
    let img_src =
      "https://i0.wp.com/insider-gaming.com/wp-content/uploads/2022/10/iron-man-playtesting.jpg?fit=1920%2C1080&ssl=1";
    // tạo data trong function thì dùng let, ko dùng this
    return (
      <div className="container pt-5">
        <div className="card text-left">
          <img
            style={{ width: 300, borderRadius: 20 }}
            className="card-img-top"
            src={img_src}
            alt
          />
          <div className="card-body">
            <h4 className="card-title">{this.username}</h4>
          </div>
        </div>
      </div>
    );
  }
}
//  img_src=""
