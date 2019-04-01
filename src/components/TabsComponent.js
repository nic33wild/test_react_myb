import React, { Component } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

const PATHS = "/players/";
const PATHEE = "/upcoming";
const PATHEF = "/friends";

class TabsComponent extends Component {

  render() {
    const TabBar = (
        <Tabs>
          <TabList>
            <Tab>
              <Link
                to={PATHS + this.props.match.params.id + PATHEE}
              >
                Upcoming Events
              </Link>
            </Tab>
            <Tab>
              <Link
                to={PATHS + this.props.match.params.id + PATHEF}
              >
                Friends
              </Link>
            </Tab>
          </TabList>
        </Tabs>
    );

    return <div className="col-lg-9 col-md-9 col-xs-12 offset-lg-3 offset-md-3">{TabBar}</div>;
  }
}

export default TabsComponent;
