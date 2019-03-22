import React, { Component } from "react";
import { CardGroup } from "semantic-ui-react";
import Fetch from "./Fetch";
import { Card, Icon, Image } from "semantic-ui-react";


const extra = (
  <div className="container">
    <div>
      <a>
        <Icon name="calendar" />
        16 events
      </a>
    </div>
    <div>
      <a>
        <Icon name="users" />
        160 Friends
      </a>
    </div>
  </div>
);

export default class FriendsTab extends Component {
  render() {
    return (
      <div>
        <CardGroup>
          <Card>
            <Card.Content>
              <Image
                floated="left"
                size="tiny"
                rounded="true"
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              />
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>Friends of Elliot</Card.Meta>
              {extra}
            </Card.Content>
          </Card>
        </CardGroup>
      </div>
    );
  }
}
