import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./css/reset.css";
import "./css/LinkGeneral.css";

import EmersonDev from "./views/EmersonDev";
import NaAmerica from "./views/NaAmerica";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={EmersonDev} />

        <Route exact path="/naamerica" component={NaAmerica} />
      </Router>
    </div>
  );
}

export default App;
