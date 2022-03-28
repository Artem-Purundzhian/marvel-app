import React, { Component } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import MarvelService from "../../services/MarvelService";

import "./appBanner.scss";

class AppBanner extends Component {
  constructor(props) {
    super(props);
    this.updateChar();
  }
  state = {
    char: {},
    loading: true,
    error: false
  };
  noDescritptionTxt = "There is no description for this character";
  marvelService = new MarvelService();
  onCharLoaded = (char) => {
    this.setState({ char : {...char}, loading:false });
  };
  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelService.getCharacter(id).then(charObj => this.onCharLoaded(charObj)).catch(this.onError);
  };

  onError = () =>{
    this.setState({ loading:false, error: true });
  }

  render() {
    const {
      char,
      loading,
      error
    } = this.state;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char}/>: null;
    return (
      <div className="banner__container">
        <div className="banner__column">
          {errorMessage}
          {spinner}
          {content}
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

const View = ({ char }) => {
  const {name, description, thumbnail, homepage, wiki } = char;
  return (
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
          <a href={homepage} className="banner__button button__red _button">
            Homepage
          </a>
          <a href={wiki} className="banner__button button__gray _button">
            wiki
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
