import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Login from '../pages/Login.js'
import { Signup } from '../pages/Signup.js'

const WelcomeContainer =  ( {match, user, setUser}) => {
  const [message, setMessage] = useState(undefined)

  return (
      <div>
        <h1>Welcome To Readable</h1>
        <Switch>
          <Route path={`${match.url}/login`}>
              <Login
                setUser={setUser}
                setMessage={setMessage}/>
            </Route>
            <Route path={`${match.url}/signup`}>
              <Signup
                setUser={setUser}
                setMessage={setMessage}/>
            </Route>
        </Switch>
        {message && 
          <p>{message}</p>
        }

      </div>
  )
}

export default WelcomeContainer;