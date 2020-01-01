import React, {} from 'react'
import { Button } from 'semantic-ui-react'
import './panels.scss';

export const BookDisplaySlide = ( {slide, currentSlide, setCurrentSlide, totalSlides} ) => {

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
    <div className="bookDisplaySlide">
      <Button
        color="blue"
        icon='left chevron'
        inverted
        className="backButton"
        onClick={(e) => handleBackClick(e)}/>
      {slide &&
        slide.map(book => {
          return (
            <div className="bookDisplayImage">
              <img src={book.image_url}></img>
            </div>
          )
        })
      }
      <Button
        color="blue"
        inverted
        className="nextButton"
        icon='right chevron'
        onClick={(e) => handleNextClick(e)}/>
    </div>
  )
}