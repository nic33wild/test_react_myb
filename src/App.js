import React, { Component } from "react";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ProfilePage />
      </React.Fragment>
    );
  }
}

export default App;
