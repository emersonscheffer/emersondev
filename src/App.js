import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./css/reset.css";
import "./App.css"
import "./css/LinkGeneral.css";

import EmersonDev from "./views/EmersonDev";
import NaAmerica from "./views/NaAmerica";
import IosApps from "./views/IosApps";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={EmersonDev} />

        <Route path="/iosapps" component={IosApps} />
        <Route path="/naamerica" component={NaAmerica} />
      </Router>
    </div>
  );
}

export default App;
