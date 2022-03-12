import DanhSachDienThoai from "./DanhSachDienThoai";
import { dataBaiTapGioHang } from "./data";
import ModalGioHang from "./ModalGioHang";
import SanPhamChiTiet from "./SanPhamChiTiet";

import React, { Component } from "react";

export default class BaiTapGioHang extends Component {
  state = {
    dsdt: dataBaiTapGioHang,
  };
  render() {
    return (
      <div>
        <ModalGioHang />
        <DanhSachDienThoai dsdt={this.state.dsdt} />
        <SanPhamChiTiet />
      </div>
    );
  }
}
