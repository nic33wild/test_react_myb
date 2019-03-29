import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList } from "react-tabs";
import "./Tabs.css";

const PATHS = "/players/";
const PATHEE = "/upcoming";
const PATHEF = "/friends";

class TabBarNew extends Component {
  render() {
    return (
      <div className="col-lg-9 col-xs-12 offset-lg-3">
        <Tabs>
        <TabList activeTabClassName='is-selected'>
          <Tab>
          <Link to={PATHS + this.props.match.params.id + PATHEE}>
            Upcoming Events
          </Link>
        </Tab>
        <Tab>
          <Link to={PATHS + this.props.match.params.id + PATHEF}>Friends</Link>
          </Tab>
        </TabList>
      </Tabs>
      </div>
    );
  }
}

export default TabBarNew;
