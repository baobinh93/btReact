import React, { Component } from "react";

export default class HandlingEvent extends Component {
  sayHello(_str) {
    return console.log("Hello" + _str);
  }
  sayHi(_str) {
    return alert("Hello" + _str);
  }
  render() {
    return (
      <div className="btn btn-success" onClick={() => this.sayHi("Binh")}>
        Click me
      </div>
    );
  }
}
