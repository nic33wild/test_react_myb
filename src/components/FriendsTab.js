import React from "react";
import { CardGroup } from "semantic-ui-react";
import Fetch from "./Fetch";
import { Card, Icon, Image } from "semantic-ui-react";

const PATH = "/players/1/friends";

const FriendsTab = () => (
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
          <CardGroup itemsPerRow="3" stackable>
            {items.map(item => (
              <Card key={item.id}>
                <Card.Content>
                  <Image
                    floated="left"
                    size="tiny"
                    rounded="true"
                    src={item.picture}
                  />
                  <Card.Header>
                    {item.first_name} {item.last_name}
                  </Card.Header>
                  <Card.Meta>Friend</Card.Meta>
                  <Card.Content extra>
                    <div>
                      <a>
                        <Icon name="calendar" />
                        {item.total_events}
                      </a>
                    </div>
                    <div>
                      <a>
                        <Icon name="users" />
                        {item.total_friends}
                      </a>
                    </div>
                  </Card.Content>
                </Card.Content>
              </Card>
            ))}
          </CardGroup>
        </div>
      );
    }}
  </Fetch>
);

export default FriendsTab;
