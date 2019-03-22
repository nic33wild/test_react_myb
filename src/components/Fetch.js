import React, { Component } from "react";
import UserPanel from "./UserPanel";
import FriendsTab from "./FriendsTab";
import UpcomingEventsTab from "./UpcomingEventsTab";

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/players/1/friends")
      .then(res => res.json())
      .then(
        json => {
          this.setState({
            isLoaded: true,
            items: json
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;

    console.log(this.state);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <UserPanel items={this.state.items} />
        </div>
      );
    }
  }
}

export default Fetch;

{
  /* <ul>
  { this.state.map(items => (
    <li key={items.id}>
      {items.item} {items.item}
    </li>
  ))}
</ul> */
}
