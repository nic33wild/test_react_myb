import React, { Component } from "react";
import OneEvent from "./OneEvent";
import { CardGroup } from "semantic-ui-react";

export default class UpcomingEventsTab extends Component {
  render() {
    return (
      <div>
        <CardGroup>
          <OneEvent />
        </CardGroup>
      </div>
    );
  }
}
