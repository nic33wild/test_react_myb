import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList } from "react-tabs";

import "./Tabs.css";

const PATHS = "/players/";
const PATHEE = "/upcoming";
const PATHEF = "/friends";

class TabBarNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
    this.handleClickActiveTab = this.handleClickActiveTab.bind(this);
  }

  handleClickActiveTab(currentTab) {
    this.setState({ activeTab: currentTab });
   }


  render() {
    const activeTab = 0;
    return (
      <div className="col-lg-9 col-xs-12 offset-lg-3">
        
          <Tabs>

              <TabList
                className={activeTab === 0 ? "react-tabs__tab--selected" : "react-tabs__tab"}
              >
              <Tab>
                <Link style={{ textDecoration: 'none' }}
                  to={PATHS + this.props.match.params.id + PATHEE}
                  onClick={this.handleClickActiveTab.bind(this, 0)}
                >
                  Upcoming Events
                </Link>
                </Tab>
              <Tab
              className={activeTab === 1 ? "react-tabs__tab--selected" : "react-tabs__tab"}
              >
                <Link style={{ textDecoration: 'none' }}
                  to={PATHS + this.props.match.params.id + PATHEF}
                  onClick={this.handleClickActiveTab.bind(this, 1)}
                >
                  Friends
                </Link>
                </Tab>

              </TabList>

              
          </Tabs>
        </div>
    );
  }
}

export default TabBarNew;


// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Tab, Tabs, TabList } from "react-tabs";
// import "./Tabs.css";

// const PATHS = "/players/";
// const PATHEE = "/upcoming";
// const PATHEF = "/friends";

// class TabBarNew extends Component {
//   render() {
//     return (
//       <div className="col-lg-9 col-xs-12 offset-lg-3">
//         <Tabs>
//         <TabList activeTabClassName='is-selected'>
//           <Tab>
//           <Link to={PATHS + this.props.match.params.id + PATHEE}>
//             Upcoming Events
//           </Link>
//         </Tab>
//         <Tab>
//           <Link to={PATHS + this.props.match.params.id + PATHEF}>Friends</Link>
//           </Tab>
//         </TabList>
//       </Tabs>
//       </div>
//     );
//   }
// }

// export default TabBarNew;
