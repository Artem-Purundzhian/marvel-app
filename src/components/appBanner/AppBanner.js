import React, { Component } from "react";

import "./appBanner.scss";

class AppBanner extends Component {
  render() {
    return (
      <div className="banner__container">
        <div className="banner__column">
          <div className="banner__row random_char">
            <div className="banner__img _img">
              <img src="" alt="" />
            </div>
            <div className="banner__info">
              <div className="banner__info__title _title">Thor</div>
              <div className="banner__info__subtitle _subtitle">
                As the Norse God of thunder and lightning, Thor wields one of
                the greatest weapons ever made, the enchanted hammer Mjolnir.
                While others have described Thor as an over-muscled, oafish
                imbecile, he's quite smart and compassionate...
              </div>
              <div className="banner__info__buttonContainer _buttonContainer">
                <div className="banner__button button__red _button">Homepage</div>
                <div className="banner__button button__gray _button">wiki</div>
              </div>
            </div>
          </div>
          <div className="banner__row tryIt_block">
            <div className="banner__info">
              <div className="banner__info__title _title"></div>
              <div className="banner__info__subtitle _subtitle"></div>
              <div className="banner__info__buttonContainer _buttonContainer">
                <div className="banner__button button__red _button"></div>
                <div className="banner__button button__gray _button"></div>
              </div>
            </div>
            <div className="banner__img _img">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppBanner;
