import React, { Component } from "react";
import CoolTabs from "react-cool-tabs";
import FriendsTab from "./FriendsTab";
import UpcomingEventsTab from "./UpcomingEventsTab";

class Content1 extends Component {
  render() {
    return (
      <div>
        <UpcomingEventsTab />
      </div>
    );
  }
}
class Content2 extends Component {
  render() {
    return (
      <div>
        <FriendsTab />
      </div>
    );
  }
}

export default class Tabs extends Component {
  render() {
    return (
      <div>
        <CoolTabs
          tabKey={"1"}
          style={{ width: 550, height: 500, background: "white" }}
          activeTabStyle={{ background: "#efefef", color: "black" }}
          unActiveTabStyle={{ background: "white", color: "black" }}
          activeLeftTabBorderBottomStyle={{ background: "#424242", height: 4 }}
          activeRightTabBorderBottomStyle={{ background: "#424242", height: 4 }}
          tabsBorderBottomStyle={{ background: "#424242", height: 2 }}
          leftContentStyle={{ background: "white" }}
          rightContentStyle={{ background: "white" }}
          leftTabTitle={"Upcoming events"}
          rightTabTitle={"Friends"}
          leftContent={<Content1 />}
          rightContent={<Content2 />}
          contentTransitionStyle={"transform 0.6s ease-in"}
          borderTransitionStyle={"all 0.6s ease-in"}
        />
      </div>
    );
  }
}
