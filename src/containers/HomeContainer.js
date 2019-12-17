import React, { } from 'react';
import { Route, Link } from "react-router-dom"
import paths from '../paths.js';
import Login from '../pages/Login.js'
import SearchBar from '../components/SearchBar.js'

const HomeContainer = ( {user, logout, setInstanceToRender} ) => {
  return (
      <div>
        <h1>Readable</h1>
        <p></p>
        <SearchBar />
        <br></br>
        <button onClick={logout}>log out</button>

      </div>
  )
}

export default HomeContainer;