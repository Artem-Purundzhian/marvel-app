import React, { Component } from "react";
import LokiImg from "../../resources/img/loki.svg";

import "./charInfo.scss";

class CharInfo extends Component {
  render() {
    return (
      <div className="charInfo">
        <div className="charInfo__container">
          <div className="charInfo__header">
            <div className="charInfo__header__column">
              <div className="chafInfo__header__img">
                <img src={LokiImg} alt="characterImage" />
              </div>
              <div className="charInfo__header__section">
                <span className="charInfo__title _title">loki</span>
                <div className="button__container">
                  <div className="button__red _button">Homepage</div>
                  <div className="button__gray _button">wiki</div>
                </div>
              </div>
            </div>
            <div className="charInfo__header__subtitle">
              <div className="subtitle__container">
                In Norse mythology, Loki is a god or jötunn (or both). Loki is
                the son of Fárbauti and Laufey, and the brother of Helblindi and
                Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the
                wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki
                is the father of Nari and/or Narfi and with the stallion
                Svaðilfari as the father, Loki gave birth—in the form of a
                mare—to the eight-legged horse Sleipnir. In addition, Loki is
                referred to as the father of Váli in the Prose Edda.
              </div>
            </div>
          </div>
          <div className="charInfo__comics">
            <div className="charInfo__comics__container">
              <span className="charInfo__comics__title">Comics:</span>
              <div className="charInfo__comics__list__container">
                <ul className="charInfo__comics__list">
                  <li className="charInfo__comics__name">All-Winners Squad: Band of Heroes (2011) #3</li>
                  <li className="charInfo__comics__name">Alpha Flight (1983) #50</li>
                  <li className="charInfo__comics__name">Amazing Spider-Man (1999) #503</li>
                  <li className="charInfo__comics__name">Amazing Spider-Man (1999) #504</li>
                  <li className="charInfo__comics__name">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</li>
                  <li className="charInfo__comics__name">Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
                  <li className="charInfo__comics__name">Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</li>
                  <li className="charInfo__comics__name">Vengeance (2011) #4</li>
                  <li className="charInfo__comics__name">Avengers (1963) #1</li>
                  <li className="charInfo__comics__name">Avengers (1996) #1</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharInfo;
