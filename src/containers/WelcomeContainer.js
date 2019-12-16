import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom"
import paths from '../paths.js';
import Login from '../pages/Login.js'

const WelcomeContainer = ( {user, setUser}) => {
  return (
      <div>
        <h1>Welcome To Readable</h1>
        <Login
          setUser={setUser}/>
        <a href="#">Register a new account</a>
      </div>
  )
}

export default WelcomeContainer;