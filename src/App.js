import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./css/reset.css";
import "./App.css"
import "./css/LinkGeneral.css";

import EmersonDev from "./views/EmersonDev";
import NaAmerica from "./views/NaAmerica";
import IosApps from "./views/IosApps";
import NaAmericaPolicy from "./views/NaAmericaPolicy";
import NaAmericaSupport from "./views/NaAmericaSupport";
import NaAmericaManual from "./views/NaAmericaManual";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={EmersonDev} />

        <Route path="/iosapps" component={IosApps} />
        <Route path="/naamerica" component={NaAmerica} />
        <Route path="/naamericapolicy" component={NaAmericaPolicy} />
        <Route path="/naamericasupport" component={NaAmericaSupport} />
        <Route path="/naamericamanual" component={NaAmericaManual} />
      </Router>
    </div>
  );
}

export default App;
