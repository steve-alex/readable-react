import React, {} from 'react'

export const BooksInCommonSlide = ( {slide} ) => {

  return (
    <div className="booksInCommonSlide">
      {slide &&
        slide.map(book => {
          return (
            <div className="bookInCommon">
              <img src={book.image_url}></img>
            </div>
          )
        })
      }
    </div>
  )
}