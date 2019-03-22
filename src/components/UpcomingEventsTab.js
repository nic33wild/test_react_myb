import React, { Component } from "react";
import { CardGroup } from "semantic-ui-react";
import Fetch from "./Fetch";
import { Card, Icon } from "semantic-ui-react";

const TheEvent = (
  <div className="container">
    <div>
      <h3>TITLE</h3>
      <p>Tuesday 29 January at 20:09</p>
    </div>
  </div>
);

export default class UpcomingEventsTab extends Component {
  render() {
    return (
      <div>
        <CardGroup>
        <Card>
    <Card.Content meta="in 3 months" />
    {TheEvent}
    <Card.Content extra>
      <Icon name="users" />
      11 Participants
    </Card.Content>
  </Card>
        </CardGroup>
      </div>
    );
  }
}
