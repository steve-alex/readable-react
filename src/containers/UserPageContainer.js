import React, { } from 'react';
import { Route, Switch } from "react-router-dom"
import UserProfile from '../pages/UserProfile.js'


const UserPageContainer = ( {instanceToRender, user, match}) => {
  return (
      <div>
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
      </div>
  )
}

export default UserPageContainer;