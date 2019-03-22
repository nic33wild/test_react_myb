import React from "react";
import { Card, Icon } from "semantic-ui-react";

const TheEvent = (
  <div className="container">
    <div>
      <h3>TITLE</h3>
      <p>Tuesday 29 January at 20:09</p>
    </div>
  </div>
);

const OneEvent = () => (
  <Card>
    <Card.Content meta="in 3 months" />
    {TheEvent}
    <Card.Content extra>
      <Icon name="users" />
      11 Participants
    </Card.Content>
  </Card>
);

export default OneEvent;
