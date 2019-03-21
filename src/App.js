import React, { Component } from "react";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import {Tab, Tabs, Tablist, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
