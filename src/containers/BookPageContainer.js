import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom"
import paths from '../paths.js';
import Login from '../pages/Login.js'

const BookPageContainer = ( {user, setUser} ) => {
  return (
      <div>
        <h1>Book Page</h1>
      </div>
  )
}

export default BookPageContainer;