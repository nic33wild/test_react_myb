import React, { Component } from "react";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Fetch from "./components/Fetch";
import Router from "./Router";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <ProfilePage>
            <Fetch />
          </ProfilePage>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
