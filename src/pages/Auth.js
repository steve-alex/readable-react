import React from 'react';
import { Route } from "react-router-dom";
import Login from './Login.js'

const Auth = ({ setUserLoggedIn }) => {
  return(
    <>
      <Route exact path="/auth/login">
        <Login setUserLoggedIn={setUserLoggedIn}/>
      </Route>
      <Route exact path="/auth/signup">
        <div>Signup</div>
      </Route>
    </>
  )
}

export default Auth;