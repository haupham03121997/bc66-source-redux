import React, { Component } from "react";

export default class ListPhone extends Component {
  renderListPhone = () => {
    let { dataListPhone, handleAddPhone } = this.props;

    return dataListPhone.map((phone) => {
      return (
        <div key={phone.maSP} className="col-4">
          <div className="card ">
            <img className="card-img-top" src={phone.hinhAnh} alt="" />
            <div className="card-body">
              <h4 className="card-title">{phone.tenSP}</h4>
              <button
                onClick={() => {
                  handleAddPhone(phone);
                }}
                className="btn btn-success"
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div className="row col-5">{this.renderListPhone()}</div>;
  }
}
