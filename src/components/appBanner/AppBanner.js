import React, { Component } from "react";
import "./appBanner.scss";

class AppBanner extends Component {
  render() {
    return (
      <div className="banner__container">
        <div className="banner__column">
          <div className="banner__row random_char">
            <div className="banner__img _img_random_char"></div>
            <div className="banner__info">
              <div className="banner__info__title _title">Thor</div>
              <div className="banner__info__subtitle _subtitle">
                As the Norse God of thunder and lightning, Thor wields one of
                the greatest weapons ever made, the enchanted hammer Mjolnir.
                While others have described Thor as an over-muscled, oafish
                imbecile, he's quite smart and compassionate...
                <br />
                <br />
              </div>
              <div className="banner__info__buttonContainer _buttonContainer">
                <div className="banner__button button__red _button">
                  Homepage
                </div>
                <div className="banner__button button__gray _button">wiki</div>
              </div>
            </div>
          </div>
          <div className="banner__row tryIt_block">
            <div className="banner__info">
              <div className="banner__info__title _title">
                <h2 className="tryIt_block_Title">
                  Random character for today!
                </h2>
                <h1 className="tryIt_block_Title">
                  Do you want to get to know him better?
                </h1>
              </div>
              <div className="banner__bottom__column">
                <div className="banner__bottom__column__info">
                  <div className="banner__info__title _title">
                    <h2 className="tryIt_block_Title">Or choose another one</h2>
                  </div>
                  <div className="banner__info__buttonContainer _buttonContainer">
                    <div className="banner__button button__red _button">
                      Try it
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppBanner;
