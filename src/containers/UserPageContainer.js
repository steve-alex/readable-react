import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom"
import paths from '../paths.js';
import Login from '../pages/Login.js'

const UserPageContainer = ( {user, setUser}) => {
  return (
      <div>
        <h1>User Page</h1>
      </div>
  )
}

export default UserPageContainer;