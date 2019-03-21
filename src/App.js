import React, { Component } from "react";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <p>I am App</p>
        <ProfilePage />
      </React.Fragment>
    );
  }
}

export default App;
