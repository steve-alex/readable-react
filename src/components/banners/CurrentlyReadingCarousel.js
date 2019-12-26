import React, {useState, useEffect} from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { CurrentlyReadingBookPanel } from '../panels/CurrentlyReadingBookPanel.js'
import 'pure-react-carousel/dist/react-carousel.es.css';

export const CurrentlyReadingCarousel = ( {currentlyReading, setCurrentBook, pageCount, setPageCount, handleInputUpdate, handleSubmit} ) => {
  return(
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={45}
        totalSlides={currentlyReading.length}
      >
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
                <Slide
                  index={index}>
                  <CurrentlyReadingBookPanel
                    index={index}
                    book={book}
                    setCurrentBook={setCurrentBook}
                    setPageCount={setPageCount}
                    pageCount={pageCount}
                    handleInputUpdate={handleInputUpdate}
                    handleSubmit={handleSubmit}
                  />
                </Slide>
              )
            })
          }
        </Slider>
      </CarouselProvider>
    </div>
  )
}