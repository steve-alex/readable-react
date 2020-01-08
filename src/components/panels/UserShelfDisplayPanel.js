import React, { useState, useEffect } from 'react'
import { BookDisplaySlide } from '../panels/BookDisplaySlide.js'
import { Redirect } from 'react-router-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const UserShelfDisplayPanel = ( {shelfName, shelfId, books} ) => {
  const [booksToDisplay, setBooksToDisplay] = useState(undefined)
  const [clicked, setClicked] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (books) {
      createBooksDisplayArray()
    }
  }, [])

  const createBooksDisplayArray = () => {
    let booksToDisplay = []
    Array.from(books).forEach((book, i) => {
      console.log(book)
      console.log(i)
      let index = Math.floor(i / 4)
      if (booksToDisplay[index]) {
        booksToDisplay[index].push(book)
      } else {
        booksToDisplay[index] = []
        booksToDisplay[index].push(book)
      }
    })
    setBooksToDisplay(booksToDisplay)
  }

  const getTotalSlides = () => {
    if (Math.floor(books.length/4) % 1 != 0) {
      return Math.floor(books.length/4)
    } else {
      return Math.floor(books.length/4) + 1
    }
  }

  return(
    <div className="userShelfDisplayPanel">
      <h1 className="booksInCommonTitle text-hoverable">
          <span onClick={() => setClicked(true)}>{shelfName}</span>
      </h1>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={23}
        currentSlide={currentSlide}
        totalSlides={getTotalSlides()}>
        <Slider>
          {booksToDisplay &&
            booksToDisplay.map(slide => {
              return(
                <Slide>
                  <BookDisplaySlide
                    totalSlides={Math.floor(books.length/4)+1}
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                    slide={slide}/>
                </Slide>
              )
            })
          }
        </Slider>
      </CarouselProvider>
      {clicked &&
        <Redirect to={`/shelves/${shelfId}`} />}
    </div>
  )
}