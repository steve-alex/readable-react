import React, { useState, useEffect, useCallback} from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { CurrentlyReadingBookPanel } from '../components/panels/CurrentlyReadingBookPanel.js'
import { CurrentlyReadingCarousel } from '../components/banners/CurrentlyReadingCarousel.js'
import { SubmitProgressForm } from '../forms/SubmitProgressForm.js'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Input, Container, Form, Button } from 'semantic-ui-react'
import API from '../adapters/api.js';

const HomePageCurrentlyReadingContainer = ( {userId} ) => {
  const [currentlyReading, setCurrentlyReading] = useState(undefined)
  const [bookToUpdate, setBookToUpdate] = useState(undefined)
  const [pageCount, setPageCount] = useState(undefined)

  useEffect(() => {
    API.getUser(userId)
    .then(res => setCurrentlyReading(res.user.updates_by_copy))
  }, [])

  const setCurrentBook = (index) => {
    let copy_id = currentlyReading[index].copy_id
    setBookToUpdate(copy_id)
  }

  const handleInputUpdate = (update) => {
    setPageCount(update)
  }

  const handleSubmit = () => {
    API.updateProgress(bookToUpdate, pageCount)
    //Need to make this rerender every time?
  }

  if (currentlyReading) {
    return (
      <div>
        <h1>Currently Reading</h1>
        <CurrentlyReadingCarousel
          currentlyReading={currentlyReading}
          setCurrentBook={setCurrentBook}
          pageCount={pageCount}
          setPageCount={setPageCount}
          handleInputUpdate={handleInputUpdate}
          handleSubmit={handleSubmit}
        />
      </div>
    )
  } else {
    return(
      <div>
        <h1>Get reading!</h1>
      </div>
    )
  }
}

export default HomePageCurrentlyReadingContainer;