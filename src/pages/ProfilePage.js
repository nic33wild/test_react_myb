import React, { Component } from "react";
import UserPanel from "../components/UserPanel";
import TwoTabs from "../components/TwoTabs";
import TabsComponent from "../components/TabsComponent";

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <p>I am ProfilePage</p>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <UserPanel />
            </div>
            <div className="col-9">
              <TwoTabs />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
