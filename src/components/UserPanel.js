/** @jsx jsx */
import React, { Component } from "react";
import { jsx, css } from "@emotion/core";
import Fetch from "./Fetch";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1
    }}
  />
);

const PATH = "/players/";

export default class UserPanel extends Component {
  lastSeen(d1) {
    let today = new Date();
    let ytoday = today.getFullYear();
    let months = (ytoday - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += today.getMonth() + 1;
    return months <= 0
      ? "Last seen This month"
      : "Last seen " + months + " months ago";
  }

  render() {
    return (
      <Fetch path={PATH + this.props.match.params.id}>
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
            <div className="col-lg-3 col-md-3 col-xs-12">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <img
                      src={items.picture}
                      alt="User Image"
                      css={{
                        "border-radius": 20,
                        "margin-top": 5,
                        "margin-bottom": 5
                      }}
                    />
                  </div>
                  <div
                    className="col-lg-12"
                    css={{
                      fontSize: 12,
                      fontFamily: "Georgia, serif",
                      color: "darkgray"
                    }}
                  >
                    <div>
                      <h3
                        css={{
                          color: "black"
                        }}
                      >
                        {items.first_name} {items.last_name}
                      </h3>
                      <p>Works at {items.company}</p>
                    </div>
                    <div>
                      <p>
                        <em>
                          Lives in {items.city_name} <br />
                        </em>
                        <em>{this.lastSeen(new Date(items.last_seen))}</em>
                      </p>
                    </div>
                  </div>
                  <div div className="col-lg-12">
                    <ColoredLine color="darkgray" />
                  </div>
                  <div className="col-lg-6 text-center">
                    <p
                      css={{
                        "margin-bottom": 0,
                        fontWeight: "bold",
                        "font-size": 25
                      }}
                    >
                      {items.total_events}
                    </p>
                    <em>events</em>
                  </div>
                  <div className="col-lg-6 text-center">
                    <p
                      css={{
                        "margin-bottom": 0,
                        fontWeight: "bold",
                        "font-size": 25
                      }}
                    >
                      {items.total_friends}
                    </p>
                    <em>friends</em>
                  </div>
                </div>
                <ColoredLine color="darkgray" />
              </div>
            </div>
          );
        }}
      </Fetch>
    );
  }
}
