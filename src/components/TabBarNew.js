import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import UpcomingEventsTab from "./UpcomingEventsTab";
import FriendsTab from "./FriendsTab";


class TabBarNew extends Component {
  render() {

    return (
      <div>
          
          <div>
          <Link to={`/players/:id/lastEvents`} >Upcoming Events</Link>
          <Link to={`/players/:id/friends`} >Friends</Link>
        </div>
        <div className="tabs">
          <Switch>
            <Route path={`/players/:id/lastEvents`} component={UpcomingEventsTab} />
            <Route path={`/players/:id/friends`} component={FriendsTab} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default TabBarNew;
