import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom"
import HomeContainer from './HomeContainer.js'
import BookPageContainer from './BookPageContainer.js'
import UserPageContainer from './UserPageContainer.js'
import SearchPageContainer from './SearchPageContainer.js'


const MainContainer = ( {user, setUser, logout}) => {
  const [currentPage, setCurrentPage] = useState('/home')
  const [instanceToRender, setInstanceToRender] = useState(undefined)

  return (
    <div>
      <Switch>
        <Route path='/home'>
          <HomeContainer user={user} logout={logout}/>
        </Route>
        <Route path='/search'>
          <SearchPageContainer
            shelves={user.shelves}
            logout={logout}
            setToRender={setToRender}/>
        </Route>
        <Route path='/book'>
          <BookPageContainer user={user}/>
        </Route>
        <Route path='/user'>
          <UserPageContainer user={user}/>
        </Route>
      </Switch>
    </div>

  )
}

export default MainContainer;