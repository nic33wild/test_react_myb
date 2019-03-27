import React, { Component } from 'react'
import { CardGroup } from "semantic-ui-react";
import Fetch from "./Fetch";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const PATH = "/players/1/friends";

export default class FriendsTab extends Component {


  render() { 
    
    return (
      
    <Fetch path={this.props.match.url}>
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
          <h1>TEST{this.props.match.params.id}</h1>
            <CardGroup stackable>
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
                    <Link to={`/players/${item.id}`} activeClassName="active">
                      {item.first_name} {item.last_name}                
                    </Link>
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
        )
      }}
    </Fetch>
    )
}
}
