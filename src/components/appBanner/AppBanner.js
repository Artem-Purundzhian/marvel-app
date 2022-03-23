import React, { Component } from "react";
import MarvelService from "../../services/MarvelService";
import thor from "../../resources/img/Thumbnail.webp";

import "./appBanner.scss";

class AppBanner extends Component {
  constructor(props) {
    super(props);
    this.updateChar();
  }
  state = {
    char: {
      name: 'Thor',
      description: null,
      thumbnail: thor,
      homepage: null,
      wiki: null,
    }
  };

  marvelService = new MarvelService();
  onCharLoaded = (char) => {
    this.setState({char});
  }
  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelService.getCharacter(id).then(this.onCharLoaded);
  };

  render() {
    const { char: {name, description, thumbnail, homepage, wiki }} = this.state;
    return (
      <div className="banner__container">
        <div className="banner__column">
          <div className="banner__row random_char">
            <div className="banner__img _img_random_char">
              <img src={thumbnail} alt="CharacterImage" />
            </div>
            <div className="banner__info">
              <div className="banner__info__title _title">{name}</div>
              <div className="banner__info__subtitle _subtitle">
                {description}
                <br />
                <br />
              </div>
              <div className="banner__info__buttonContainer _buttonContainer">
                <a
                  href={homepage}
                  className="banner__button button__red _button"
                >
                  Homepage
                </a>
                <a href={wiki} className="banner__button button__gray _button">
                  wiki
                </a>
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
