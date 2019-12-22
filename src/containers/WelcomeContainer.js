import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import Login from '../pages/Login.js'

const WelcomeContainer = ( {user, setUser}) => {
  const [message, setMessage] = useState(undefined)

  return (
      <div>
        <h1>Welcome To Readable</h1>
        <Switch>
          <Route path="/">
            <Login
              setUser={setUser}
              setMessage={setMessage}
            />
          </Route>
        </Switch>
        <a href="#">Register a new account</a>
        {message && 
          <p>{message}</p>
        }
      </div>
  )
}

export default WelcomeContainer;