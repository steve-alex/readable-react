import React, { useState, useEffect } from 'react'
import { BookDisplaySlide } from '../panels/BookDisplaySlide.js'
import { Redirect } from 'react-router-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const UserShelfDisplayPanel = ( {shelfName, shelfId, books} ) => {
  const [booksToDisplay, setBooksToDisplay] = useState(undefined)
  const [clicked, setClicked] = useState(false)

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

  return(
    <div className="userShelfDisplayPanel">
      <h1 className="booksInCommonTitle text-hoverable">
          <span onClick={() => setClicked(true)}>{shelfName}</span>
      </h1>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        totalSlides={Math.floor(books.length/4)+1}>
        <Slider>
          {booksToDisplay &&
            booksToDisplay.map(slide => {
              return(
                <Slide>
                  <BookDisplaySlide slide={slide}/>
                </Slide>
              )
            })
          }
        </Slider>
      </CarouselProvider>
      {/* {clicked &&
        <Redirect to={`shelves/${shelfId}`} />} */}
    </div>
  )
}