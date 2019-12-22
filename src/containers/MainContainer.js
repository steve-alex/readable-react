import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom"
import HomeContainer from './HomeContainer.js'
import BookPageContainer from './BookPageContainer.js'
import UserPageContainer from './UserPageContainer.js'
import SearchPageContainer from './SearchPageContainer.js'
import MiscellaneousContainer from './MiscellaneousContainer.js'
import Navbar from '../components/Navbar.js'


const MainContainer = ( {user, logout}) => {
  const [instanceToRender, setInstanceToRender] = useState(undefined)
  //could this be called resource to render?
  //Once a user has been authenticated, all the things dealing with data relating to a user
  //Should render here right? The Login container doesn't need to know anything about that data. 

  return (
    <div>
      {/* <Navbar
        userId={user.data.id}/> */}
      <Switch>
        {/* <Route path='/home'>
          <HomeContainer
            user={user}
            logout={logout}
          />
        </Route> */}
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
          render={routerProps => {
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
      <a href="http://localhost:3001/search">Search</a>
    </div>
  )
}

export default MainContainer;