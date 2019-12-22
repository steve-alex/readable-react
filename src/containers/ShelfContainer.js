import React from 'react'
import { Route, Switch } from "react-router-dom"
import Shelf from '../components/Shelf.js'


const ShelfContainer = ( {user, match} ) => {
  return (
    <div>
      <Switch>
        <Route
          path={`${match.url}/:shelfId`}
          user={user}
          render={routerProps => {
            return <Shelf
                      user={user}
                      {...routerProps}/>
          }}
        />
      </Switch>
    </div>
  )
}

export default ShelfContainer;