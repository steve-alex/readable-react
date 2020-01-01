import React, { useState, useEffect } from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { CurrentlyReadingBookPanel } from '../panels/CurrentlyReadingBookPanel.js'
import 'pure-react-carousel/dist/react-carousel.es.css';
import API from '../../adapters/api.js'

export const CurrentlyReadingCarousel = ( {currentlyReading, checkFinishedReading} ) => {
  const [bookToUpdate, setBookToUpdate] = useState(undefined)
  const [pageToUpdate, setPageToUpdate] = useState(undefined)
  const [currentSlide, setCurrentSlide] = useState(0)

  const createUpdate = (pageCount) => {
    API.createUpdate(bookToUpdate, pageToUpdate)
      .then(checkFinishedReading(bookToUpdate, pageCount, pageToUpdate))
  }

  const setCurrentBook = (index) => {
    let copy_id = currentlyReading[index].copy_id
    setBookToUpdate(copy_id)
  }
  
  const totalSlides = currentlyReading.length || 1;

  return(
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={29}
        currentSlide={currentSlide}
        totalSlides={totalSlides}>
        <Slider
          onClick={e => {
            if (e.target.tagName === "INPUT") {
              e.target.focus()
            }
          }}
        >
          {currentlyReading && 
            currentlyReading.map((book, index) => {
              return (
                <Slide index={index}>
                  <CurrentlyReadingBookPanel
                    index={index}
                    book={book}
                    totalSlides={totalSlides}
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                    currentlyReading={currentlyReading}
                    pageToUpdate={pageToUpdate}
                    setPageToUpdate={setPageToUpdate}
                    setCurrentBook={setCurrentBook}
                    createUpdate={createUpdate}/>
                </Slide>
              )
            })
          }
        </Slider>
      </CarouselProvider>
    </div>
  )
}