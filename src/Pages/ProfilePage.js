import React, { Component } from 'react'
import UserPanel from '../components/UserPanel';
import TabBarNew from '../components/TabBarNew';

export default class ProfilePage extends Component {
    
  render() {
    return (
      <div>
            <slot name="profilepage">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-xs-12">
                    <UserPanel />
                  </div>
                  <div className="col-lg-9 col-xs-12">
                    {/* <Tabs
                      active={this.state.active}
                      onChange={active => this.setState({ active })}
                    >
                      <div key="UpcomingEventsTab">Upcoming Events</div>
                      <div key="FriendsTab">Friends</div>
                    </Tabs>
                    <div>
                      {content[this.state.active]}
                    </div> */}
                    <TabBarNew/>
                  </div>
                </div>
              </div>
            </slot>
          </div>
    )
  }
}
