import React, { Component } from "react";
import Abyss from "../../resources/img/abyss.jpg";

import "./charList.scss";

class CharList extends Component {
  render() {
    return (
      <div className="charList">
        <div className="charList__container">

          <div className="char__card">
            <div className="char__card__wrapper">
              <div className="char__img">
                <img src={Abyss} alt="characterPhoto" />
              </div>
              <div className="char__name__block">
                <span className="char__name">abyss</span>
              </div>
            </div>
          </div>

          <div className="char__card _active">
            <div className="char__card__wrapper">
              <div className="char__img">
                <img src={Abyss} alt="characterPhoto" />
              </div>
              <div className="char__name__block">
                <span className="char__name">abyss</span>
              </div>
            </div>
          </div>

          <div className="char__card">
            <div className="char__card__wrapper">
              <div className="char__img">
                <img src={Abyss} alt="characterPhoto" />
              </div>
              <div className="char__name__block">
                <span className="char__name">abyss</span>
              </div>
            </div>
          </div>

          <div className="char__card">
            <div className="char__card__wrapper">
              <div className="char__img">
                <img src={Abyss} alt="characterPhoto" />
              </div>
              <div className="char__name__block">
                <span className="char__name">abyss</span>
              </div>
            </div>
          </div>

          <div className="char__card">
            <div className="char__card__wrapper">
              <div className="char__img">
                <img src={Abyss} alt="characterPhoto" />
              </div>
              <div className="char__name__block">
                <span className="char__name">abyss</span>
              </div>
            </div>
          </div>

          <div className="char__card">
            <div className="char__card__wrapper">
              <div className="char__img">
                <img src={Abyss} alt="characterPhoto" />
              </div>
              <div className="char__name__block">
                <span className="char__name">abyss</span>
              </div>
            </div>
          </div>

          <div className="char__card">
            <div className="char__card__wrapper">
              <div className="char__img">
                <img src={Abyss} alt="characterPhoto" />
              </div>
              <div className="char__name__block">
                <span className="char__name">abyss</span>
              </div>
            </div>
          </div>
          
          <div className="char__card">
            <div className="char__card__wrapper">
              <div className="char__img">
                <img src={Abyss} alt="characterPhoto" />
              </div>
              <div className="char__name__block">
                <span className="char__name">abyss abyss abyss</span>
              </div>
            </div>
          </div>

          <div className="char__card">
            <div className="char__card__wrapper">
              <div className="char__img">
                <img src={Abyss} alt="characterPhoto" />
              </div>
              <div className="char__name__block">
                <span className="char__name">abyss</span>
              </div>
            </div>
          </div>
          <div className="button__container">
            <div className="button__red _button">load more</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharList;
