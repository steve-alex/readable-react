import React from "react";
import { Route } from "react-router-dom";
import { BookShow } from "../pages/BookShow.js";

export const BookPageContainer = ({ user, match }) => {
  return (
    <div>
      <Route
        path={`${match.url}/:bookId`}
        render={routerProps => {
          return <BookShow user={user} {...routerProps} />;
        }}
      />
    </div>
  );
};
