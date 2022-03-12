import React, { Component } from "react";
//import { useState } from "react";
export default class Xe extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       linkXe: "./img/imgBlackCar.jpg",
  //     };
  //   }
  state = {
    linkXe: "./img/imgBlackCar.jpg",
  };
  handleChangeCar(_link) {
    this.setState({
      linkXe: _link,
    });
  }
  render() {
    return (
      <>
        <img style={{ width: "30%" }} src={this.state.linkXe} />

        <div>
          <h1>Chon Mau Xe</h1>
          <button
            className="btn btn-danger "
            onClick={() => this.handleChangeCar("./img/imgRedCar.jpg")}
          >
            Red
          </button>
          <button
            className="btn mx-2 "
            onClick={() =>
              this.setState({
                linkXe: "./img/imgSilverCar.jpg",
              })
            }
          >
            {" "}
            Silver{" "}
          </button>
          <button
            className="btn btn-dark "
            onClick={() =>
              this.setState({
                linkXe: "./img/imgBlackCar.jpg",
              })
            }
          >
            Black
          </button>
        </div>
      </>
    );
  }
}
