import React from "react";
import { Route, Switch } from "react-router-dom";
import { UserPage } from "../pages/UserProfile.js";

export const UserPageContainer = ({ user, match }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/:userId`}
        user={user}
        render={routerProps => {
          return <UserPage user={user} {...routerProps} />;
        }}
      />
    </Switch>
  );
};