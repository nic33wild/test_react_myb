import React, { Component, Children } from "react";


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

    const { children } =this.props;

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
            {Children.toArray(children)[this.state.current]}
            </div>
        );
      }
    }
  }
  

export default Fetch;
