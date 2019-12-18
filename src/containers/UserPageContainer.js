import React, { } from 'react';
import { Route, Switch } from "react-router-dom"


const UserPageContainer = ( {instanceToRender, setInstanceToRender, user, match}) => {
  return (
      <div>
        <Switch>
        <Route
          path={`${match.url}/show/:userid`}
          instanceToRender={instanceToRender}
          setInstanceToRender={setInstanceToRender}
          user={user}
        />

        </Switch>
      </div>
  )
}

export default UserPageContainer;