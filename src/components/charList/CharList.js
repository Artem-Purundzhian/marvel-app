import React, { Component } from "react";
import MarvelService from "../../services/MarvelService";

import "./charList.scss";

class CharList extends Component {
  marvelService = new MarvelService();
  state = {
    cards: [],
  };
  getCharacters = () => {
    this.marvelService
      .getAllCharacters()
      .then((response) => this.onListLoaded(response));
  };
  onListLoaded = (data) => {
    this.setState({ cards: [...data] });
  };
  componentDidMount() {
    this.getCharacters();
  }
  componentDidUpdate(){
    const cardList = document.querySelectorAll(".char__card");
    cardList.forEach((card) => {
      card.addEventListener("click", (event) => {
        cardList.forEach((item) => {
          item.classList.remove("_active");
        });
        card.classList.toggle("_active");
      });
      console.log(card);
    });
  }
  componentWillUnmount() {}
  render() {
    const { cards } = this.state;
    return (
      <div className="charList">
        <div className="charList__container">
          <Elements data={cards} />
          <div className="button__container">
            <div className="button__red _button">load more</div>
          </div>
        </div>
      </div>
    );
  }
}

const Elements = ({ data }) => {
  return data.map((char) => {
    const { name, thumbnail, id } = char;
    return (
      <div className="char__card" key={id}>
        <div className="char__card__wrapper">
          <div className="char__img">
            <img className="char__card__img" src={thumbnail} alt="characterPhoto" />
          </div>
          <div className="char__name__block">
            <span className="char__name">{name}</span>
          </div>
        </div>
      </div>
    );
  });
};

export default CharList;
