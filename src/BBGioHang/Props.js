import React, { Component } from "react";

import MobileBox from "./Components/MobileBox";
import ModalMobile from "./Components/ModalMobile";
export default class Props extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dienThoai: this.props.dsDt[0],
      sanPhamDuocChon: [],
    };
  }
  renderMobile = (_mobile) => {
    this.setState({
      dienThoai: _mobile,
    });
  };

  renderContent() {
    return [
      this.props.dsDt?.map((item) => {
        return (
          <MobileBox
            item={item}
            handleRenderMobile={this.renderMobile}
            handleChonMua={this.props.onChonMua}
          />
        );
      }),
      <ModalMobile dienThoai={this.state.dienThoai} />,
    ];
  }
  render() {
    return this.renderContent();
  }
}
