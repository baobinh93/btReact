import React, { Component } from "react";
//import { data } from "./data";

export default class RenderWithMap extends Component {
  renderContent(_data) {
    return _data.map((item, index) => {
      return (
        <div className="card col-3 p-1 " data-key={item.id}>
          <img src={item.thumbnail_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.short_description}</p>
            <p className="text-danger">
              Giá: {item.price.toLocaleString()} đồng
            </p>
          </div>
        </div>
      );
    });
  }
  render() {
    return this.renderContent();
  }
}
