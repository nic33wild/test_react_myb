import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Router from "./Router";

class App extends Component {

  render() {
    

    return (
      <React.Fragment>
            <Router />
      </React.Fragment>
    );
  }
}

export default App;
