import React, { useState } from 'react'
import { Route, Switch } from "react-router-dom"
import UserUpdateForm from '../forms/UserUpdateForm.js'
import ShelfContainer from '../containers/ShelfContainer.js'
import { SettingsContainer } from '../containers/SettingsContainer.js'

const MiscellaneousContainer = ( {user, match} ) => {

  return(
    <Switch>
      <Route
        path={`/settings`}
        render={routerProps => {
          return <SettingsContainer
            user={user}
            {...routerProps}/>
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