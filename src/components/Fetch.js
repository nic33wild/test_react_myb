import React, { Component, Children } from "react";

const API_ROOT = 'http://localhost:5000';

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: [],
      isLoaded: false
    };
  }

  componentDidMount(path) {
    path = this.props.path;
    fetch(API_ROOT + path)
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

  componentDidUpdate(prevProps) {
    if (this.props.path !== prevProps.path) {
      this.fetchData(this.props.path);
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (this.props.children(this.state));
      }
    }
  }
  

export default Fetch;

