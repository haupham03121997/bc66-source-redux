import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    console.log(this.props);
/*
props là gì ? 
this.props nó là thuộc tính có sẵn của class component 
dùng để nhận giá trị từ nơi sử dụng thẻ component này (component cha truyền xuống component con)


// props với state có gì khác nhau ?
+ Giống nhau : đều là thuộc tính có sẵn của class component , đều để binding lên giao diện 

+ khác nhau : 
-State =>> thì có thể setState được 
- Props =>> thì k thể được (Read only)

*/

    let { color, name, handleClick, bgColor } = this.props;
    return (
      <div style={{ color: color, backgroundColor: bgColor }} className="p-5 ">
        <h3>Card</h3>
        <h4>Username: {name}</h4>
        <button onClick={handleClick} className="btn btn-dark">
          Click me
        </button>
      </div>
    );
  }
}
