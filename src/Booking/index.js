import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { TYPE_SELECTED } from './actions';

class Booking extends Component {
  render() {
    console.log('props', this.props);
    const { list, bookingList, onSelected } = this.props;
    return (
      <div className="container mt-5">
        <h1>Book vé xem phim</h1>

        <div className="row">
          <div className="col-7">
            <h3> Màn hình</h3>
            <div className="chair-container">
              {list.map((item, index) => {
                const first = index === 0;
                const danhSachGhe = item.danhSachGhe;
                return (
                  <div className="chair-row" key={`list-danh-sach-ghe=${index}`}>
                    <div className="type">{first ? '' : item.hang}</div>
                    {danhSachGhe.map((ghe, index) => (
                      <div
                        key={`danh-sach-ghe=${index}`}
                        className={`ghe ${ghe.daDat ? 'gheDuocChon' : ''} ${ghe.dangChon ? 'gheDangChon' : ''}`}
                        onClick={() => {
                          if (ghe.daDat || ghe.dangChon) {
                            return;
                          }
                          const data = { hang: item.hang, ...ghe };
                          onSelected(data);
                        }}
                      >
                        {ghe.soGhe}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-5">
            <h3>Số ghế đã đặt</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 40 }}>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <div className="gheDuocChon"></div>
                <p>Ghế đã đặt</p>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <div className="gheDangChon"></div>
                <p>Ghế đang đặt</p>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <div className="ghe"></div>
                <p>Ghế chưa đặt</p>
              </div>
            </div>

            <table className="table">
              <thead>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </thead>
              <tbody>
                {bookingList.map((item) => {
                  return (
                    <tr>
                      <td>{item.soGhe}</td>
                      <td>{item.gia}</td>
                      <td>
                        <button className="btn btn-danger">X</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {bookingList.length && (
              <div style={{ textAlign: 'end' }}>
                <button className="btn btn-success">Thanh toán</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.movieReducer.list,
    bookingList: state.movieReducer.bookingList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelected: (data) => {
      console.log('onSelected data', data);
      dispatch({ type: TYPE_SELECTED, payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
