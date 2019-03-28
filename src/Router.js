import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import FriendsTab from "./components/FriendsTab";
import UpcomingEventsTab from "./components/UpcomingEventsTab";
import App from "./App";
import UserPanel from "./components/UserPanel";
import TabBarNew from "./components/TabBarNew";
import Test from "./components/Test";
import ProfilePage from "./Pages/ProfilePage";

export default function() {
  return (
    <Router>
      <Switch>
      <Route path="/players/1/upcoming" exact component={ProfilePage}
        />
        <Redirect from="/" exact to="/players/1/friends" />
        <Redirect from="/players/:id" exact to="/players/:id/friends" />
        <Route
          path="/players/:id/upcoming"
          component={UpcomingEventsTab}
        />
        <Route
          path="/players/:id/friends"
          component={FriendsTab}
        />
        <Route path="/test/:id" component={Test} />
      </Switch>
    </Router>
  );
}

// function PrivateRoute(props) {
//     return (
//        <Fetch
//           req={getUserId}
//           role={props.role}
//           renderSuccess={() => <Route {...props} />}
//           renderError={() => <Redirect to="/" />}
//        />
//     );
//  }

{
  /* <PrivateRoute path="/profile" component={ProfileClient} role="ROLE_USER" />
            <Route
               path="/salons/search/:id-:city"
               component={({ match }) => <SearchList id={match.params.id} city={match.params.city} />}
            />
            <Route path="/salons/search" component={SearchList} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/admin" component={AdminPanel} role="ROLE_ADMIN" />
            <Route
               path="/salons/:name/:id/view"
               // component={({ match }) => <SalonView id={match.params.id_} />}
               component={({ match }) => <SalonViewBis id={match.params.id} />}
               role="ROLE_SALON"
            />
            <Route path="/monsalon" component={AdminSalon} />
            <Route component={Error} 
            
            
            
            
            <Route
          path="/players/1/upcoming"
          component={({ match }) => (
            <div>
              <UserPanel id={match.params.id} />
              <TabBarNew/>
              <UpcomingEventsTab id={match.params.id} />
              <FriendsTab id={match.params.id}/>
            </div>
          )}
        />
        
        
        
        /> */
}
