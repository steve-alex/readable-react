import React, {} from 'react'

export const BookDisplaySlide = ( {slide} ) => {

  return (
    <div className="bookDisplaySlide">
      {slide &&
        slide.map(book => {
          return (
            <div className="bookDisplayImage">
              <img src={book.image_url} alt={book.title}></img>
            </div>
          )
        })
      }
    </div>
  )
}