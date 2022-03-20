import AppHeader from "../appHeader/AppHeader";
import AppBanner from "../appBanner/AppBanner";

import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <main>
        <AppHeader />
        <AppBanner/>
      </main>
    </div>
  );
};

export default App;
