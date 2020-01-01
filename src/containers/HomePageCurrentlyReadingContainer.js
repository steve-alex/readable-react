import React, { useState, useEffect, useCallback} from 'react'
import { CurrentlyReadingCarousel } from '../components/banners/CurrentlyReadingCarousel.js'
import { SubmitProgressForm } from '../components/forms/SubmitProgressForm.js'
import { FinishedReadingPanel } from '../components/panels/FinishedReadingPanel.js'
import { GetReadingCarousel} from '../components/banners/GetReadingCarousel.js'
import 'pure-react-carousel/dist/react-carousel.es.css';
import API from '../adapters/api.js';
import styles from './containers.scss'

const HomePageCurrentlyReadingContainer = ( {userId, createNewPost, timeline, setTimeline} ) => {
  const [currentlyReading, setCurrentlyReading] = useState(undefined)
  const [finishedReading, setFinishedReading] = useState(false)
  const [finishedReadingBook, setFinishedReadingBook] = useState(false)

  useEffect(() => {
    API.getUser(userId)
    .then(res => setCurrentlyReading(res.user.updates_by_copy))
  }, [])

  const createProgress = (e, content) => {
    e.preventDefault()
    API.createProgress(content)
      .then(() => createNewPost())
      // .then((res) => createAndSetNewTimeline(res))
  }

  const createAndSetNewTimeline = (res) => {
    const newTimeline = timeline
    newTimeline.posts = [{"progress": res.progress}, ...timeline.posts]
    console.log(newTimeline)
    // newTimeline.posts.unshift({"progress": res.progress})
    setTimeline(newTimeline)
  }

  const checkFinishedReading = (bookToUpdate, pageCount, pageToUpdate) => {
    console.log(pageToUpdate)
    console.log(pageCount)
    console.log(pageToUpdate >= pageCount)
    if (pageToUpdate >= pageCount) {
      setFinishedReading(true)
      setFinishedReadingBook(bookToUpdate)
      console.log("Finished reading")
    }
  }

  if (currentlyReading) {
    return(
      <div>
        <h1 className="currently-reading">Currently Reading</h1>
        <FinishedReadingPanel
          finishedBook={finishedReadingBook}
          finishedReading={finishedReading}
          setFinishedReading={setFinishedReading}/>
        <CurrentlyReadingCarousel
          currentlyReading={currentlyReading}
          checkFinishedReading={checkFinishedReading}/>
        <SubmitProgressForm
          createProgress={createProgress}/>
      </div>
    )
  } else {
    return(
      <div>
        <GetReadingCarousel />
      </div>
    )
  }
}

export default HomePageCurrentlyReadingContainer;