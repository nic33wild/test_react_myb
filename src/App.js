import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import UserPanel from "./components/UserPanel";
import FriendsTab from "./components/FriendsTab";
import UpcomingEventsTab from "./components/UpcomingEventsTab";
import Router from "./Router";
import TabBarNew from "./components/TabBarNew";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "UpcomingEventsTab" };
  }

  render() {
    const content = {
      UpcomingEventsTab: (
        <div>
          <UpcomingEventsTab />
        </div>
      ),
      FriendsTab: (
        <div>
          <FriendsTab />
        </div>
      )
    };

    return (
      <React.Fragment>
            <Router />
      </React.Fragment>
    );
  }
}

export default App;
