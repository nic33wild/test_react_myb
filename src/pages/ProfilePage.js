import React, { Component } from "react";
import UserPanel from "../components/UserPanel";
import Tabs from "../components/Tabs";

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <p>I am ProfilePage</p>
        <UserPanel />
        <Tabs/>
      </div>
    );
  }
}
