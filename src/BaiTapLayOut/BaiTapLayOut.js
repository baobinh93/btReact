import React, { Component } from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import "./css/style.css";

export default class BaiTapLayOut extends Component {
  render() {
    return (
      <>
        <div>BaiTapLayOut</div>
        <Header />
        <Slider />
        <ProductList />
        <Footer />
      </>
    );
  }
}
