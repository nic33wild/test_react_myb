import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


import "./Tabs.css";

const PATHS = "/players/";
const PATHEE = "/upcoming";
const PATHEF = "/friends";

class TabBarNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 2
    };
    this.handleClickActiveTab = this.handleClickActiveTab.bind(this);
  }

  handleClickActiveTab(currentTab) {
    this.setState({ activeTab: currentTab });
   }


  render() {
    const activeTab = 1;
    return (
      <div className="col-lg-9 col-xs-12 offset-lg-3">
        <div className="container">

          <Tabs>
            <TabList>
              <Tab
                className={activeTab === 1 ? "react-tabs__tab--selected" : ""}
              >
                <Link
                  to={PATHS + this.props.match.params.id + PATHEE}
                  onClick={this.handleClickActiveTab.bind(this, 1)}
                  styleName="nav-tabs__item-link"
                >
                  Upcoming Events
                </Link>
              </Tab>
              <Tab
              className={activeTab === 2 ? "Tabs__Tab--active" : "Tabs__Tab"}
              >
                <Link
                  to={PATHS + this.props.match.params.id + PATHEF}
                  onClick={this.handleClickActiveTab.bind(this, 2)}
                  styleName="nav-tabs__item-link"
                >
                  Friends
                </Link>
              </Tab>
            </TabList>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default TabBarNew;
