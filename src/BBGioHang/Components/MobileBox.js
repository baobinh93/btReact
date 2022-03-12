import React, { Component } from "react";

export default class MobileBox extends Component {
  //   showMobile(_imgUrl, _name, _price) {
  //     console.log(_imgUrl, _name, _price);
  //   }
  renderMobile() {
    return (
      <div className="card col-3 p-1 " data-key={this.props.item.id}>
        <img
          src={this.props.item.thumbnail_url}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.item.name}</h5>

          <p className="text-danger">
            Giá: {this.props.item.price.toLocaleString()} đồng
          </p>
        </div>
        <div className="p-2">
          <button
            className="btn btn-success col-6 "
            onClick={() => this.props.handleRenderMobile(this.props.item)}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Xem Chi Tiết
          </button>
          <button
            className="btn btn-danger col-6"
            onClick={() => this.props.handleChonMua(this.props.item)}
          >
            Chọn mua
          </button>
        </div>
      </div>
    );
  }
  render() {
    return this.renderMobile();
  }
}
