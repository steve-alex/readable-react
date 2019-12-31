import React, { useEffect, useState, useCallback } from 'react';
import SearchBar from '../components/SearchBar.js'
import TimelineContainer from './TimelineContainer.js'
import HomePageCurrentlyReadingContainer from './HomePageCurrentlyReadingContainer.js'
import API from '../adapters/api.js'



const HomePageContainer = ( {user, logout} ) => {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    API.getTimeline()
      .then(res => setTimeline(res.timeline))
  }, [])
  
  return (
    <div>
      <HomePageCurrentlyReadingContainer
        userId={user.id}
        timeline={timeline.posts}
        setTimeline={setTimeline}/>
      {timeline &&
        <TimelineContainer
          timeline={timeline}
        />
      }
      <button onClick={logout}>log out</button>
    </div>
  )
}

export default HomePageContainer;