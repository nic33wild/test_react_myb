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

export default function() {
  return (
    <Router>
      <Switch>
      <Route
          path="/players/1/upcoming"
          render={props => (
            <div>
              <UserPanel />
              <UpcomingEventsTab />
              <FriendsTab />
            </div>
          )}
        />
        <Redirect from="/" exact to="/players/1/upcoming" />
        <Redirect from="/players/:id" exact to="/players/:id/upcoming" />
        <Route
          path="/players/:id/upcoming"
          component={({ match }) => <UpcomingEventsTab id={match.params.id} />}
        />
        <Route
          path="/players/:id/friends"
          component={({ match }) => <FriendsTab id={match.params.id} />}
        />
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
            <Route component={Error} /> */
}
