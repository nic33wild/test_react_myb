/** @jsx jsx */
import React, { Component } from 'react';
import { CardGroup, Card, Icon } from "semantic-ui-react";
import { jsx } from "@emotion/core";
import Fetch from "./Fetch";


const PATH = "/players/1/lastEvents";

export default class UpcomingEventsTab extends Component{

  monthsDiff(d1){
    let today = new Date();
    let ytoday = today.getFullYear();
    let months = (d1.getFullYear() - ytoday) * 12;
    months -= today.getMonth() + 1;
    months += d1.getMonth()+ 1;
    return months <= 0 ? "This month" : "in "+months+" months";
  }

  formatDate(date){
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    let weekNames = [
      "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday", "Sunday"
    ];
    let dayofweek = date.getDay();
    let day = date.getDate();
    let month = date.getMonth();
    let hour = date.getHours();
    let minute = date.getMinutes();
    return weekNames[dayofweek]+" "+day + " " + monthNames[month]+ " at " + hour + ":" +minute;
  }

  numberOfParticipants(event){
    return Object.keys(event).length + " Participants";
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
                <Card.Content>
                  {this.monthsDiff(new Date(item.date))}
                  <h2>{item.name.toUpperCase()}</h2>
                    <p>{this.formatDate(new Date(item.date))}</p>
                  <Icon name="users" />
                  {this.numberOfParticipants(item.participants)}
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
