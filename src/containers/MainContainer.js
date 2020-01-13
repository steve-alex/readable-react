import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../components/banners/Navbar.js";
import { HomePageContainer } from "./HomePageContainer.js";
import { SearchPageContainer } from "./SearchPageContainer.js";
import { BookPageContainer } from "./BookPageContainer.js";
import { UserPageContainer } from "./UserPageContainer.js";
import { MiscellaneousContainer } from "./MiscellaneousContainer.js";
import { Container, Sticky } from "semantic-ui-react";

export const MainContainer = ({ user, logout }) => {
  return (
    <>
      <Sticky>
        <Navbar logout={logout} sticky userId={user.id} />
      </Sticky>
      <Container>
        <Switch>
          <Route path="/home">
            <HomePageContainer user={user} logout={logout} />
          </Route>
          <Route path="/search">
            <SearchPageContainer userShelves={user.shelves} logout={logout} />
          </Route>
          <Route
            path="/books"
            render={routerProps => {
              return <BookPageContainer user={user} {...routerProps} />;
            }}
          />
          <Route
            path="/users"
            component={routerProps => {
              return <UserPageContainer user={user} {...routerProps} />;
            }}
          />
          <Route
            path="/"
            render={routerProps => {
              return <MiscellaneousContainer user={user} {...routerProps} />;
            }}
          />
        </Switch>
      </Container>
    </>
  );
};
