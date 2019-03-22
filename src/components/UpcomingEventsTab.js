import React from "react";
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

const PATH = '/players/:id/lastEvents';

const UpcomingEventsTab = () => (
  <Fetch path={PATH}>
    {({ items, isLoading, error }) => {
      if (!items) {
        return <p>No data yet ...</p>;
      }

      if (error) {
        return <p>{error.message}</p>;
      }

      if (isLoading) {
        return <p>Loading ...</p>;
      }

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
            <Card>
              <Card.Content meta="in 3 months" />
              {TheEvent}
              <Card.Content extra>
                <Icon name="users" />
                11 Participants
              </Card.Content>
            </Card>
            <Card>
              <Card.Content meta="in 3 months" />
              {TheEvent}
              <Card.Content extra>
                <Icon name="users" />
                11 Participants
              </Card.Content>
            </Card>
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
    }}
  </Fetch>
);

export default UpcomingEventsTab;
