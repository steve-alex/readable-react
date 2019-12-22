import React, { } from 'react';
import { Route, Switch } from "react-router-dom"
import UserProfile from '../pages/UserProfile.js'


const UserPageContainer = ( {user, match}) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/:userId`}
        user={user}
        render={routerProps => {
          return <UserProfile 
                    user={user}
                    {...routerProps}
                  />
        }}
      />
    </Switch>
  )
}

export default UserPageContainer;