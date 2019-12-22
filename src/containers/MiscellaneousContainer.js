import React, { useState } from 'react'
import { Route, Switch } from "react-router-dom"
import UserUpdateForm from '../forms/UserUpdateForm.js'

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

      {/* <Route
        path={`${match.url}/shelves/:shelfid`}
        instanceToRender={instanceToRender}
        setInstanceToRender={setInstanceToRender}
        
        
      />
      <Route
        path={`${match.url}/reviews/:reviewid`}
        instanceToRender={instanceToRender}
        setInstanceToRender={setInstanceToRender}
        user={user}
      />
      <Route
        path={`${match.url}/progress/:progressid`}
        instanceToRender={instanceToRender}
        setInstanceToRender={setInstanceToRender}
        user={user}
      /> */}
    </Switch>
  )
}

export default MiscellaneousContainer;