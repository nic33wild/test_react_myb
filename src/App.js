import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import UserPanel from "./components/UserPanel";
import TabBarNew from "./components/TabBarNew";
import FriendsTab from "./components/FriendsTab";
import UpcomingEventsTab from "./components/UpcomingEventsTab";
import TabsComponent from "./components/TabsComponent";
import Tabs from "./components/Tabs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "UpcomingEventsTab" };
  }

  
  render() {
    const content = {
      UpcomingEventsTab: <div><UpcomingEventsTab/></div>,
      FriendsTab: <div><FriendsTab/></div>,
    };

    return (
      <React.Fragment>
        <Router>
          <div>
            <slot name="profilepage">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-xs-12">
                    <UserPanel />
                  </div>
                  <div className="col-lg-9 col-xs-12">
                    <Tabs
                      active={this.state.active}
                      onChange={active => this.setState({ active })}
                    >
                      <div key="UpcomingEventsTab">Upcoming Events</div>
                      <div key="FriendsTab">Friends</div>
                    </Tabs>
                    <div>
                      {content[this.state.active]}
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
