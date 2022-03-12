import React, { Component } from "react";

export default class ModalGIoHang extends Component {
  render() {
    return this.props.gioHang?.map((dienThoai) => {
      return (
        <table className="table">
          <thead>
            <tr>
              <th scope="col"> Sản Phẩm</th>
              <th scope="col">Giá tiền</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      );
    });
  }
}
