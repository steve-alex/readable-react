import React, { useState } from 'react'
import { Route, Switch } from "react-router-dom"

const MiscellaneousContainer = ( {instanceToRender, setInstanceToRender, user, match} ) => {

  return(
    <Switch>
      <Route
        path={`${match.url}/shelves/:shelfid`}
        instanceToRender={instanceToRender}
        setInstanceToRender={setInstanceToRender}
        user={user}
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
      />
    </Switch>
  )
}

export default MiscellaneousContainer;