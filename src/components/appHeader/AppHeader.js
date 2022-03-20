import React, { Component } from "react";

import "./appHeader.scss";
class AppHeader extends Component {
  render() {
    return (
      <div className="appHeader">
        <div className="title">
          <span className="marvel">Marvel</span>
          <span>information portal</span>
        </div>
        <div className="navbbar">
            <span>Characters</span>
            <span>/</span>
            <span>Comics</span>
        </div>
      </div>
    );
  }
}

export default AppHeader;
