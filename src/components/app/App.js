
import AppHeader from "../appHeader/AppHeader";
import AppBanner from "../appBanner/AppBanner";
import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";

import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <main>
        <AppHeader />
        <AppBanner />
        <div className="wrapper">
          <CharList />
          <CharInfo />
        </div>
      </main>
    </div>
  );
};

export default App;
