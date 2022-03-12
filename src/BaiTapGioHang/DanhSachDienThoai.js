import ItemDienThoai from "./ItemDienThoai";

import React, { Component } from "react";

export default class DanhSachDienThoai extends Component {
  render() {
    return (
      <div className="row">
        {this.props.dsdt.map((dt, index) => {
          if (index < 3) {
            return <ItemDienThoai data={dt} />;
          }
        })}
      </div>
    );
  }
}
