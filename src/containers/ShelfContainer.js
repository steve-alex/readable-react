import React from 'react'
import { Route, Switch } from "react-router-dom"
import { UserShelfPage } from '../pages/UserShelfPage.js'


const ShelfContainer = ( {user, match} ) => {
  return (
    <div>
      <Switch>
        <Route
          path={`${match.url}/:shelfId`}
          user={user}
          render={routerProps => {
            return <UserShelfPage
                      user={user}
                      {...routerProps}/>
          }}
        />
      </Switch>
    </div>
  )
}

export default ShelfContainer;