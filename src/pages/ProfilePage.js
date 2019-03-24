import React, { Component } from "react";
import UserPanel from "../components/UserPanel";
import TabsComponent from "../components/TabsComponent";
import UpcomingEventsTab from "../components/UpcomingEventsTab";
import FriendsTab from "../components/FriendsTab";

export default class ProfilePage extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            title: ['t1','t2'],
            content: ['c1', 'c2']
    };
    }

    handleChange(e){
        this.setState({title: e.target.value })
    }


  render() {

    return (
      <div>
        
        <slot name="profilepage">

        <div className="container">
          <div className="row">
            <div className="col-3">
              <UserPanel />
            </div>
            <div className="col-9">
              <TabsComponent>
                  <UpcomingEventsTab title="Upcoming events"/>
                  <FriendsTab title="Friends"/>
              </TabsComponent>
            </div>
          </div>
        </div>

        </slot>

      </div>
    );
  }
}
