import React from "react";
import { Route, Switch } from "react-router-dom";
import { SettingsContainer } from "../pages/SettingsContainer.js";
import { ShelfContainer }  from "../containers/ShelfContainer.js";

export const MiscellaneousContainer = ({ user, match }) => {
  return (
    <Switch>
      <Route
        path={`/settings`}
        render={routerProps => {
          return <SettingsContainer user={user} {...routerProps} />;
        }}
      />
      <Route
        path={"/shelves"}
        render={routerProps => {
          return <ShelfContainer user={user} {...routerProps} />;
        }}
      />
    </Switch>
  );
};
