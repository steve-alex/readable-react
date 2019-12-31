import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Login from '../pages/Login.js'
import { Signup } from '../pages/Signup.js'

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
          <Route path="/signup">
            <Signup
              setUser={setUser}
              setMessage={setMessage}
            />
          </Route>
        </Switch>
        {message && 
          <p>{message}</p>
        }
        <Link to="welcome/signup">
          <p>Register a new account</p>
        </Link>
      </div>
  )
}

export default WelcomeContainer;