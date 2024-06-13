import React, { Component } from "react";
import ListPhone from "./ListPhone";
import CartPhone from "./CartPhone";

const dataListPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

// B1 : xây dựng giao diện
// B2 :Xác định state : 1 array , 2 object , 3string , 4number , 5bolean (nên đặt state ở đâu => đặt state ở component nào chứa được state và cả setState)
// B3: Binding state lên giao diện
export default class ExPhoneCart extends Component {
  state = {
    arrayCart: [],
  };

  handleAddPhone = (phoneClick) => {
    // console.log(phoneClick);
    // clone lại giỏ hàng
    let arrayCartNew = [...this.state.arrayCart];

    // Check xem sản phẩm có trong giỏ hàng chưa
    let phoneCheck = arrayCartNew.find((item) => item.maSP == phoneClick.maSP);

    //  nếu chưa có thì thêm mới sản phẩm còn nếu có rồi thì tăng số lượng sản phẩm đó lên 1 đơn vị
    // phoneCheck == undefine => (ko có trong giỏ hàng)
    if (phoneCheck) {
      phoneCheck.soLuong += 1;
    } else {
      // Trước khi thêm vào giỏ hàng thì thêm key số lượng (SL)
      arrayCartNew.push({ ...phoneClick, soLuong: 1 });
    }

    this.setState({
      arrayCart: arrayCartNew,
    });
  };
  handleDelete = (idPhone) => {
    // xoá => splice (index)
    // tìm index => findIndex
    // [...array] shallow copy

    var cloneCart = [...this.state.arrayCart].filter((phone) => {
      return phone.maSP !== idPhone;
    });
    // var index = cloneCart.findIndex((phone) => phone.maSP === idPhone);
    // cloneCart.splice(index, 1);
    this.setState({
      arrayCart: cloneCart,
    });
  };
  handleChangeQuantity = (idPhone, status) => {
    let cloneCart = [...this.state.arrayCart];
    let index = cloneCart.findIndex((phone) => phone.maSP === idPhone);
    cloneCart[index].soLuong = cloneCart[index].soLuong + status;
    this.setState({ arrayCart: cloneCart });
  };
  render() {
    return (
      <div className=" row">
        <ListPhone
          dataListPhone={dataListPhone}
          handleAddPhone={this.handleAddPhone}
        />
        <CartPhone
          handleChangeQuantity={this.handleChangeQuantity}
          handleDelete={this.handleDelete}
          arrayCart={this.state.arrayCart}
        />
      </div>
    );
  }
}
