import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar.js'
import API from '../adapters/api.js'

const HomeContainer = ( {user, logout, setInstanceToRender} ) => {
  const [timeline, setTimeline] = useState([])
  //The search bar here, filters the users that are in the whole database, by username, email address etc.
  ///User.find_by(email: params[:search]) \\ User.find_by(username: params[:search])

  useEffect(() => {
    //Fetch from the the users timeline serializer
    API.getTimeline()
      .then(res => setTimeline(res))
    return () => {
    };
  }, [])
  
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