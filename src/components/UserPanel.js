import React, { Component } from 'react'

export default class UserPanel extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <img src="p" alt=""/>
                </div>
                <div className="col-lg-12">
                    <h2>NAME</h2>
                    <p>Works at</p>
                    <p>Lives</p>
                    <p>Last seen</p>                    
                </div>
                <hr/>
                <div className="col-lg-6">
                    <p>Events</p>
                </div>
                <div className="col-lg-6">
                    <p>friends</p>
                </div>
            </div>
        </div>
    )
  }
}
