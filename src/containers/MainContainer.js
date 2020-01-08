import React, { useState, createRef } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import HomePageContainer from './HomePageContainer.js'
import BookPageContainer from './BookPageContainer.js'
import UserPageContainer from './UserPageContainer.js'
import SearchPageContainer from './SearchPageContainer.js'
import MiscellaneousContainer from './MiscellaneousContainer.js'
import Navbar from '../components/banners/Navbar.js'

import { Container, Sticky, Ref } from 'semantic-ui-react'

const MainContainer = ( {user, logout}) => {
  const contextRef = createRef()

  return (
    <>
      <Sticky context={contextRef}>
        <Navbar
          logout={logout}
          sticky
          userId={user.id}/>
      </Sticky>
      <Ref innerRef={contextRef}>
      <Container>
        <Switch>
          <Route path='/home'>
            <HomePageContainer
              user={user}
              logout={logout}/>
          </Route>
          <Route path='/search'>
            <SearchPageContainer
              userShelves={user.shelves}
              logout={logout}
            />
          </Route>
          <Route
            path='/books'
            render={routerProps => {
              return <BookPageContainer
                        user={user}
                        {...routerProps}/>
                      }}
          />
          <Route
            path='/users'
            component={routerProps => {
              return <UserPageContainer
                        user={user}
                        {...routerProps}
                    />
            }}
          />
          <Route
            path='/'
            render={routerProps => {
              return <MiscellaneousContainer
                user={user}
                {...routerProps}
              />
            }}
          />
        </Switch>
      </Container>
      </Ref>
    </>
  )
}

export default MainContainer;