import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar.js'
import TimelineContainer from './TimelineContainer.js'
import API from '../adapters/api.js'



const HomeContainer = ( {user, logout} ) => {
  const [timeline, setTimeline] = useState([])
  // const [timelineLoaded, setTimelineLoaded] = useState(false)

  useEffect(() => {
    API.getTimeline()
      .then(res => setTimeline(res.timeline))
      // .then(() => setTimelineLoaded(true))
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