import React, { Component } from 'react';

export default class DetailPhone extends Component {
  render() {
    let { phone, handleChangeDetailPhone } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={phone.hinhAnh} height={300} />
        <div className="card-body">
          <h5 className="card-title">{phone.tenSP}</h5>
          <button
            onClick={() => {
              handleChangeDetailPhone(phone);
            }}
            className="btn btn-success"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
