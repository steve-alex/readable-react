import React, { useState } from 'react'
import { Route, Switch } from "react-router-dom"
import UserUpdateForm from '../forms/UserUpdateForm.js'
import ShelfContainer from '../containers/ShelfContainer.js'

const MiscellaneousContainer = ( {user, match} ) => {

  return(
    <Switch>
      <Route
        path={`/update`}
        render={routerProps => {
          return <UserUpdateForm
            user={user}
            {...routerProps}
          />
        }}
      />

    <Route
      path={'/shelves'}
      render={routerProps => {
        return <ShelfContainer
                user={user}
                {...routerProps}/>
      }}
    />
    </Switch>
  )
}

export default MiscellaneousContainer;