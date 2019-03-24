import React, { Component } from 'react'
import { CardGroup } from "semantic-ui-react";
import Fetch from "./Fetch";
import { Card, Icon } from "semantic-ui-react";

const PATH = "/players/1/lastEvents";




export default class UpcomingEventsTab extends Component{

  monthsDiff(d1){
    let today = new Date();
    let ytoday = today.getFullYear();
    console.log(d1,today);
    let months = (d1.getFullYear() - ytoday) * 12;
    months -= today.getMonth() + 1;
    months += d1.getMonth()+ 1;
    console.log(months);
    return months <= 0 ? "This month" : "in "+months+" months";
  }


  render(){
      return (
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
          return(
        <div>
          <CardGroup>
            {items.map(item => (
              <Card key={item.id}>
                <Card.Content meta={this.monthsDiff(new Date(item.date))} />
                <Card.Content>
                  <div>
                    <p></p>
                    <h3>{item.name}</h3>
                    <p>{item.date}</p>
                  </div>
                  <Icon name="users" />
                  11 Participants
                </Card.Content>
              </Card>
            ))}
          </CardGroup>
        </div>)
    }}
  </Fetch>
)
}
}
