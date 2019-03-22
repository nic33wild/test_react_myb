import React, { Component } from "react";

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
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      },
      (error) => {
          this.setState({
              isLoaded: true,
              error
          });
      })
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.first_name} {item.last_name}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
  

export default Fetch;
