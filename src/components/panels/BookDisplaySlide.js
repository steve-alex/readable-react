import React, {} from 'react'
import './panels.scss';

export const BookDisplaySlide = ( {slide} ) => {

  return (
    <div className="bookDisplaySlide">
      {slide &&
        slide.map(book => {
          return (
            <div className="bookDisplayImage">
              <img src={book.image_url}></img>
            </div>
          )
        })
      }
    </div>
  )
}