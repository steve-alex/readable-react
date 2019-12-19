import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar.js'
import TimelineContainer from './TimelineContainer.js'
import API from '../adapters/api.js'



const HomeContainer = ( {user, logout} ) => {
  const [timeline, setTimeline] = useState([])
  //The search bar here, filters the users that are in the whole database, by username, email address etc.
  ///User.find_by(email: params[:search]) \\ User.find_by(username: params[:search])
  useEffect(() => {
    //Fetch from the the users timeline serializer
    API.getTimeline()
      .then(res => setTimeline(res.timeline))
  }, [])
  
  return (
    <div>
      <h1>Readable</h1>
      {timeline &&
        <TimelineContainer
          timeline={timeline}
        />
      }
      <button onClick={logout}>log out</button>

    </div>
  )
}

export default HomeContainer;