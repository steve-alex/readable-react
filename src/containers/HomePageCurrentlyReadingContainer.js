import React, { useState, useEffect, useCallback} from 'react'
import { CurrentlyReadingCarousel } from '../components/banners/CurrentlyReadingCarousel.js'
import { SubmitProgressForm } from '../components/forms/SubmitProgressForm.js'
import { FinishedReadingPanel } from '../components/panels/FinishedReadingPanel.js'
import { GetReadingCarousel} from '../components/banners/GetReadingCarousel.js'
import 'pure-react-carousel/dist/react-carousel.es.css';
import API from '../adapters/api.js';
import styles from './containers.scss'

const HomePageCurrentlyReadingContainer = ( {userId, timeline, setTimeline} ) => {
  const [currentlyReading, setCurrentlyReading] = useState(undefined)
  const [bookToUpdate, setBookToUpdate] = useState(undefined)
  const [currentPage, setCurrentPage] = useState(undefined)
  const [finishedReading, setFinishedReading] = useState(false)

  useEffect(() => {
    API.getUser(userId)
    .then(res => setCurrentlyReading(res.user.updates_by_copy))
  }, [])

  const setCurrentBook = (index) => {
    let copy_id = currentlyReading[index].copy_id
    setBookToUpdate(copy_id)
  }

  const handleInputUpdate = (update) => {
    setCurrentPage(update)
  }

  const createUpdate = (e, pageCount) => {
    API.createUpdate(bookToUpdate, currentPage)
      .then(() => checkFinishedReading(pageCount))
  }

  const createProgress = (e, content) => {
    e.preventDefault()
    API.createProgress(content)
      // .then((res) => setTimeline([{"progress": res.progress}, ...timeline]))
  }

  const checkFinishedReading = (pageCount) => {
    if (currentPage >= pageCount) {
      setFinishedReading(true)
    } 
  }

  if (currentlyReading) {
    return(
      <div>
        <h1 className="currently-reading">Currently Reading</h1>
        {/* <FinishedReadingPanel
          finishedReading={finishedReading}
          bookToUpdate={bookToUpdate}/> */}
        <CurrentlyReadingCarousel
          currentlyReading={currentlyReading}
          setCurrentBook={setCurrentBook}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleInputUpdate={handleInputUpdate}
          createUpdate={createUpdate}/>
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