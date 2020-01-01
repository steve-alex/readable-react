import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Button } from 'semantic-ui-react';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const UserShelfPreviewSlide = ( {currentSlide, setCurrentSlide, totalSlides, shelfName, shelf} ) => {
  const [redirect, setRedirect] = useState(undefined)

  const renderImages = () => {
    return shelf.books_to_display.slice(0, 4).map(book => {
      return (
        <div className="userShelfItem">
          <img src={book.image_url}></img>
        </div>
      )
    })
  }

  const handleBackClick = (e) => {
    e.preventDefault()
    if (currentSlide === 0) {
      setCurrentSlide(currentSlide)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleNextClick = (e) => {
    e.preventDefault()
    if (currentSlide === (totalSlides - 1)) {
      setCurrentSlide(currentSlide)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  return (
    <div className="userShelf">
      <Button
        color="blue"
        icon='left chevron'
        inverted
        className="backButton"
        onClick={(e) => handleBackClick(e)}/>
      {shelf.books_to_display &&
        shelf.books_to_display.slice(0, 4).map(book => {
          return (
            <div className="userShelfItem">
              <img src={book.image_url}></img>
            </div>
          )
        })
      }
      <div className="userShelfName">
        <h3 className="text-hoverable">
          <span onClick={() => setRedirect(`/shelves/${shelf.shelf_id}`)}>
            {shelfName}
          </span>
        </h3>
      </div>
      <Button
        color="blue"
        inverted
        className="nextButton"
        icon='right chevron'
        onClick={(e) => handleNextClick(e)}/>
      {redirect &&
        <Redirect to={redirect}/>
      }
    </div>
  )
}