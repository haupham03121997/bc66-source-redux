import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TYPE_GIAM, TYPE_SET_USER, TYPE_TANG } from './actions';

class DemoRedux extends Component {
  render() {
    console.log('props', this.props);
    const { number, deCrease, inCrease, user , setUser } = this.props;
    return (
      <div>
        DemoRedux
        <button className="btn btn-warning" onClick={() => deCrease(4)}>
          Giam
        </button>
        <h2>Number: {number}</h2>
        <button className="btn btn-success" onClick={() => inCrease(3)}>
          Tang
        </button>
        <hr />
        <h3>Thông tin người dùng:</h3>
        <h4>Username: {user.username} </h4>
        <h4>Age: {user.age}</h4>
        <button
          className="btn btn-primary"
          onClick={() => {
            // {username: "Nguyễn Văn A" , age: 18}
            const user = { username : "Nguyễn Văn B" , age : 20}
            setUser(user)
          }}
        >
          Set User
        </button>
      </div>
    );
  }
}

// lấy data về
let mapStateToProps = (state) => {
  return {
    number: state.numberReducer.number,
    user: state.userReducer.user, // lấy thông tin user
  };
};

// đẩy data lên
let mapDispatchToProps = (dispatch) => {
  return {
    inCrease: (data) => {
      console.log('Tang', data);
      const action = { type: TYPE_TANG, payload: data };
      dispatch(action);
    },
    deCrease: (data) => {
      console.log('Giam', data);
      const action = { type: TYPE_GIAM, payload: data };
      dispatch(action);
    },
    setUser: (user) => {
      //user : {username : "" , age : ""}
      const action = { type: TYPE_SET_USER, payload: user };
      dispatch(action);
    },
    // tạo 1 hàm để set thông tin user
  };
};
// các redux re-render component
export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);

// curry function
