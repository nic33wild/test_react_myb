import React, { Component } from "react";
import OneFriend from "./OneFriend";
import { CardGroup } from "semantic-ui-react";

export default class FriendsTab extends Component {
  render() {
    return (
      <div>
        <CardGroup>
          <OneFriend />
        </CardGroup>
      </div>
    );
  }
}
