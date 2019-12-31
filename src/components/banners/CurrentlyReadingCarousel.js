import React, { } from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { CurrentlyReadingBookPanel } from '../panels/CurrentlyReadingBookPanel.js'
import 'pure-react-carousel/dist/react-carousel.es.css';

export const CurrentlyReadingCarousel = ( {currentlyReading, setCurrentBook, currentPage, setCurrentPage, handleInputUpdate, createUpdate} ) => {
  return(
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={32}
        totalSlides={currentlyReading.length || 1}
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
                <Slide index={index}>
                  <CurrentlyReadingBookPanel
                    index={index}
                    book={book}
                    setCurrentBook={setCurrentBook}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    handleInputUpdate={handleInputUpdate}
                    createUpdate={createUpdate}
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