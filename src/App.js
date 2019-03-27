import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Fetch from "./components/Fetch";
import UserPanel from "./components/UserPanel";
import TabBarNew from "./components/TabBarNew";
import FriendsTab from "./components/FriendsTab";
import UpcomingEventsTab from "./components/UpcomingEventsTab";

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Router>
          <div>
            <slot name="profilepage">
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <UserPanel>
                      <Fetch />
                    </UserPanel>
                  </div>
                  <div className="col-9">
                    <div>
                      <UpcomingEventsTab />
                    </div>

                    <div>
                      <FriendsTab />
                    </div>
                  </div>
                </div>
              </div>
            </slot>
          </div>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;
