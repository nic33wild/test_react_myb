import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UpcomingEventsTab from "./UpcomingEventsTab";
import FriendsTab from "./FriendsTab";

class TabsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {    
    const title = this.props.children.map((props) => {
      return (<Tab key={props.props.title}>{props.props.title}</Tab>)
    })

    const TabBar = (
      <Tabs defaultIndex={0} onSelect={index => this.setState({ index })}>
        <TabList>
          {title}
        </TabList>

        <TabPanel>
          <UpcomingEventsTab />
        </TabPanel>

        <TabPanel>
          <FriendsTab />
        </TabPanel>

      </Tabs>
    );

    return (
      <div>
        {TabBar}
      </div>
    );
  }
}

export default TabsComponent;
