import React, { useState, useEffect, useCallback} from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { CurrentlyReadingCarousel } from '../components/banners/CurrentlyReadingCarousel.js'
import { SubmitProgressForm } from '../components/forms/SubmitProgressForm.js'
import { FinishedReadingPanel } from '../components/panels/FinishedReadingPanel.js'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Input, Container, Form, Button, Modal } from 'semantic-ui-react'
import API from '../adapters/api.js';

const HomePageCurrentlyReadingContainer = ( {userId} ) => {
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
  }

  const checkFinishedReading = (pageCount) => {
    if (currentPage >= pageCount) {
      setFinishedReading(true)
    } 
  }

  if (currentlyReading) {
    return(
      <div>
        <h1>Currently Reading</h1>
        <FinishedReadingPanel
          finishedReading={finishedReading}
          bookToUpdate={bookToUpdate}/>
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
      <></>
    )
  }
}

export default HomePageCurrentlyReadingContainer;