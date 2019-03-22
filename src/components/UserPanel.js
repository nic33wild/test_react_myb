/** @jsx jsx */
import React, { Component } from "react";
import { jsx } from "@emotion/core";
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

export default class UserPanel extends Component {
  render(props) {
    return (
      <Fetch>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img
                src="https://picsum.photos/200/200"
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
                  Yanis Thomas
                </h3>
                <p>Works at Renard, Breton and Lucas</p>
              </div>
              <div>
                <p>
                  <em>
                    Lives in West Mattéo <br />
                  </em>
                  <em>Last seen 4 months ago</em>
                </p>
              </div>
            </div>
            <div div className="col-lg-12">
              <ColoredLine color="darkgray" />
            </div>
            <div className="col-lg-6">
              <p>Events</p>
            </div>
            <div className="col-lg-6">
              <p>friends</p>
            </div>
          </div>
        </div>
      </Fetch>
    );
  }
}
