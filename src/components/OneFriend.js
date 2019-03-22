import React from "react";
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

const description = [
  "Amy is a violinist with 2 years experience in the wedding industry.",
  "She enjoys the outdoors and currently resides in upstate New York."
].join(" ");

const CardExampleCardProps = () => (
  
    <Card>
      <Card.Content>
        <Image
          floated="left"
          size="tiny"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        {extra}
      </Card.Content>
    </Card>
);

export default CardExampleCardProps;
