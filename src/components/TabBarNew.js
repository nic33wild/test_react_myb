import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './Tabs.css';
import '../Router';

import UpcomingEventsTab from "./UpcomingEventsTab";
import FriendsTab from "./FriendsTab";


class TabBarNew extends Component {
  render() {

    return (   
          <div>
          <Link to={`/players/:id/upcoming`} >Upcoming Events</Link>
          <Link to={`/players/:id/friends`} >Friends</Link>
        </div>
    );
  }
}

export default TabBarNew;
