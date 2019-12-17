import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom"
import HomeContainer from './HomeContainer.js'
import BookPageContainer from './BookPageContainer.js'
import UserPageContainer from './UserPageContainer.js'
import SearchPageContainer from './SearchPageContainer.js'


const MainContainer = ( {user, setUser, logout}) => {
  const [instanceToRender, setInstanceToRender] = useState(undefined)
  //could this be called resource to render?
  //Once a user has been authenticated, all the things dealing with data relating to a user
  //Should render here right? The Login container doesn't need to know anything about that data. 

  return (
    <div>
      <Switch>
        <Route path='/home'>
          <HomeContainer
            user={user}
            logout={logout}
            setInstanceToRender={setInstanceToRender}/>
        </Route>
        <Route path='/search'>
          <SearchPageContainer
            userShelves={user.shelves}
            logout={logout}
            setInstanceToRender={setInstanceToRender}/>
        </Route>
        <Route
          path='/books'
          render={routerProps => {
            return <BookPageContainer
                      instanceToRender={instanceToRender}
                      setInstanceToRender={setInstanceToRender}
                      user={user}
                      {...routerProps}
                  />
          }}
        />
        <Route
          path='/users'
          render={routerProps => {
            return <UserPageContainer
                      instanceToRender={instanceToRender}
                      setInstanceToRender={setInstanceToRender}
                      user={user}
                      {...routerProps}
                  />
          }}
        />
        <Route
          
        />
      </Switch>
      <a href="http://localhost:3001/search">Search</a>
    </div>
  )
}

export default MainContainer;